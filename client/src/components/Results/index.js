import React, { Component } from 'react';
import api from './../../utils/api'

//             title: bookInformation.volumeInfo.title,
//             authors: bookInformation.volumeInfo.authors,
//             description: bookInformation.volumeInfo.description,
//             image: bookInformation.volumeInfo.thumbnail,
//             link: bookInformation.volumeInfo.previewLink

class Results extends Component{

    state = {
        books: []
    }

    componentDidMount(){
        api.getSavedBooks().then(books => {
            this.setState({
                books: books
            })
        })
    }

    bookButton = (book) => {
        console.log(book)
        api.saveBook(book).then(res => {
            console.log("Successfully saved")
        }).catch(err => console.error(err))
        console.log(this.state.books)
    }

    render(){
        return (
            <div className="container-fluid border">
                <div className="row border">
                    <div className="col-md-2">
                        <h4>Title</h4>
                    </div>
                    <div className="col-md-2">
                        <h4>Authors</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Description</h4>
                    </div>
                    <div className="col-md-2">
                        <h4>Image</h4>
                    </div>
                    <div className="col-md-1">
                        <h4>Book Link</h4>
                    </div>
                    <div className="col-md-1">
                        <h4>Save Book!</h4>
                    </div>
                </div>
                {this.props.books ? this.props.books.map(book =>
                <div className="row border">
                    <div className="col-md-2">
                        <h4>{book.title}</h4>
                    </div>
                    <div className="col-md-2">
                        <h4>{book.authors}</h4>
                    </div>
                    <div className="col-md-3">
                        <p>{book.description}</p>
                    </div>
                    <div className="col-md-2">
                        <img src={book.image} alt={'Image of ' + book.title}></img>
                    </div>
                    <div className="col-md-1">
                        <a href={book.link}>Link</a>
                    </div>
                    <div className="col-md-1">
                        <button onClick={() => this.bookButton(book)}></button>
                    </div>
                </div>
                ):""}
            </div>
        )
    }
}

export default Results;