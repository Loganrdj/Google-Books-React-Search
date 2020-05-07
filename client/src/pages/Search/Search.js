import React, { Component } from "react";
import Form from '../../components/Form';
import apiCall from '../../utils/api';

class Search extends Component{

    state = {
        value: "",
        books: []
    }

    defineBook = (bookInformation) => {
        return {
            _id: bookInformation.id,
            title: bookInformation.volumeInfo.title,
            authors: bookInformation.volumeInfo.authors,
            description: bookInformation.volumeInfo.description,
            image: bookInformation.volumeInfo.thumbnail,
            link: bookInformation.volumeInfo.previewLink
        }
    }

    //Add search functionality here
    componentDidMount(){
        this.findBook();
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.findBook(this.state.search)
    }

    findBook = (searchTerms) => {
        apiCall.retrieveBook(searchTerms).then(res => {
            this.setState({ 
                books: res.data.items.map(bookInformation => {
                    this.defineBook(bookInformation)
                })
            })
        })
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