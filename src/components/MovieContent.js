import React from 'react';

const MovieContent = ({information}) => {

    
    return(

        
            <div className="col-12 content">

                <div className="jumbotron">

                    <h2 className="title-movie">{information.title}</h2>

                    <p class="destcription-movie">{information.overview}</p>

                </div>
            </div>

    )


}


export default MovieContent;