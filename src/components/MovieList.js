import React from 'react';
import MovieListItem from './MovieListItem'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const MovieList = (props) => {

 const {RecommandationMovie,callback} = props;

    function sendMovie(element){

        callback(element)
    }


    return(

        <div className="col-12 col-md-12 col-lg-4 col-sm-12">

           <ul>

            {
                RecommandationMovie.map(element => (


                  <MovieListItem key={element.id} themovie={element} callback={sendMovie}/>

                ))
            }

           </ul>

        </div>

    )

}



export default MovieList;