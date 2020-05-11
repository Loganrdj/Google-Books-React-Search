import React, { Component } from "react";
import Form from '../../components/Form';
import api from '../../utils/api';
import Results from '../../components/Results/index';

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
        // this.findBook();
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
        api.retrieveBook(searchTerms).then(res => {
            var bookMap = res.data.items.map(bookInformation => {
                return this.defineBook(bookInformation)
            })
            // console.log(bookMap)
            this.setState({ 
                books: bookMap
            })
            // console.log(res)
            console.log(this.state.books)
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
                    <Results books={this.state.books}></Results>

                </div>
            </div>
        )
    }
}

export default Search