import React from 'react';

const BASE_URL ='https://www.youtube.com/embed/';

const Video = ({cleVideo}) => {

 
    return(

        <div className="col-12 embed embed-responsive embed-responsive-16by9">

          
                    <iframe className="embed-responsive-item" src={`${BASE_URL}${cleVideo}`}>
                    </iframe>
     
        </div>

    )

}

export default Video;