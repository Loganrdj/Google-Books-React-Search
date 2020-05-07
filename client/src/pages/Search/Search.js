import React, { Component } from "react";
import Form from '../../components/Form';

class Search extends Component{

    state = {
        value: "",
        books: []
    }

    //Add search functionality here
    componentDidMount(){
        this.findBook();
    }

    findBook = () => {

    }

    render(){
        return(
            <div>
                <Form 
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    Results go here
                </div>
            </div>
        )
    }
}

export default Search