import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const MovieListItem = (props) => {

    const {themovie,callback} = props

   function sendMovieItem(){

        callback(themovie)        

    }
   
    return(

      
                <li className="list-group-item" onClick={sendMovieItem}>

                    <a href="#" className="media">
                      
              
                      <figure className="media-left">
                          <img className="img-rounded img-movie"src={`${IMAGE_BASE_URL}${themovie.poster_path}`}/>
                      </figure>
              
                      <div className="media-body">
              
                       <h5 className="title-list-item">{themovie.title}</h5>
              
                      </div>
              
                    </a>
              
                </li>



    )

}



export default MovieListItem;