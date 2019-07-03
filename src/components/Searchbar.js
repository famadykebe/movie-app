import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props){

        super(props);

        this.state = {

            SearchText: ''

        }

        this.hundleChangeText = this.hundleChangeText.bind(this)
        this.HundleOnClick = this.HundleOnClick.bind(this)

    }

    hundleChangeText(event){


        this.setState({SearchText:event.target.value})


    }

    HundleOnClick(){

        const {callback} = this.props;

        callback(this.state.SearchText);

    }


   render(){


    return(

      
            <div className="col-12 input-group searchbar">

                <input type="text" className="form-control" placeholder="Recherche votre film...." onChange={this.hundleChangeText}/>

                <span className="input-group-btn">

                       <button className="btn btn-primary" onClick={this.HundleOnClick}>GO</button>

                </span>

            </div>

    )



   }

}


export default SearchBar;