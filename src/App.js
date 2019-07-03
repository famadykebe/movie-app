import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/Searchbar';
import MovieContent from './components/MovieContent';
import MovieList from './components/MovieList';
import Video from './components/Movie';
import ErrorMovie from './components/ErrorMovie'
import axios from 'axios';

const POINT_URL = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIE_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_reponse=images';
const API_KEY = 'api_key=ed7a7f837813bd9a1990c5b08885df80';
const SEARCH_URL = 'search/movie?language=fr&include_adult=false';

class App extends Component{


  constructor(props){

    super(props);

    this.state = {

      movieList : [],
      CurentMovie: {},
      MovienoTrailler: false

    }
    this.RecupeTextSearch = this.RecupeTextSearch.bind(this)
    this.ChangeCurentMovie = this.ChangeCurentMovie.bind(this)
    this.RecommandationMovie = this.RecommandationMovie.bind(this)

  }


  componentWillMount(){

    this.initMovie()

  }

  initMovie(){

    axios.get(`${POINT_URL}${POPULAR_MOVIE_URL}&${API_KEY}`).then(function(reponse){

      this.setState({movieList:reponse.data.results.slice(1,6),CurentMovie:reponse.data.results[0]},function(){

        this.keyVideoMovie()
     
      })

    }.bind(this))

  }

  RecupeTextSearch(SearchText){

    axios.get(`${POINT_URL}${SEARCH_URL}&${API_KEY}&query=${SearchText}`).then(function(reponse){

     if(reponse.data.results && reponse.data.results[0])
     {

      this.setState({CurentMovie:reponse.data.results[0]},function(){

        setTimeout(() => {

          this.RecommandationMovie();

        },1000)
        this.keyVideoMovie()

      })
          
     }
    
    }.bind(this))

  }

  ChangeCurentMovie(movie){

   this.setState({CurentMovie:movie},function(){

    setTimeout(() => {

      this.RecommandationMovie();

    },1000)
    this.keyVideoMovie()

   })

  }

  RecommandationMovie(){

    const id = this.state.CurentMovie.id;

    axios.get(`${POINT_URL}movie/${id}/recommendations?${API_KEY}&language=fr`).then(function(reponse){


      this.setState({movieList:reponse.data.results.slice(0,5)})


    }.bind(this))

  }

  keyVideoMovie(){

    const id = this.state.CurentMovie.id;
    
    axios.get(`${POINT_URL}movie/${id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(reponse){

    
      if(reponse.data.videos.results && reponse.data.videos.results[0]){

        const key = reponse.data.videos.results[0].key;
        const CurentMovie = this.state.CurentMovie;
        CurentMovie.key = key;

        console.log(reponse.data.videos.results)

        this.setState({CurentMovie:CurentMovie,MovienoTrailler:false})

      }else{
        
        this.setState({MovienoTrailler:true})

      }

    }.bind(this))


  }

 
  render(){

    return(

      <div className="container">

        <div className="row">

         <div className="col-12">

             <SearchBar callback={this.RecupeTextSearch}/>

         </div>

      </div>
      

      <div className="row">

        <div class="col-12 col-lg-8 col-md-12 col-sm-12">

       
          {
            this.state.MovienoTrailler ? <ErrorMovie /> : <Video cleVideo={this.state.CurentMovie.key}/>
          } 

            
          <MovieContent information={this.state.CurentMovie}/>

        </div>


        <MovieList callback={this.ChangeCurentMovie} RecommandationMovie={this.state.movieList}/>

         

      </div>


        </div>

  
    )

  }


}

export default App;
