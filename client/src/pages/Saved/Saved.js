import React, { Component } from "react";
import apiCall from '../../utils/api';
import Results from '../../components/Results/index';

class Saved extends Component{
    state = {
        books: []
    }

    componentDidMount() {
        apiCall.getSavedBooks().then(books => {
            this.setState({
                books: books
            })
        }).catch(err => console.log(err))
    }
    render(){
        return(
            <div className="container">
                <Results books={this.state.books}></Results>
            </div>
        )
    }
}

export default Saved