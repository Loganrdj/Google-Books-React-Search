import React from 'react';

//             title: bookInformation.volumeInfo.title,
//             authors: bookInformation.volumeInfo.authors,
//             description: bookInformation.volumeInfo.description,
//             image: bookInformation.volumeInfo.thumbnail,
//             link: bookInformation.volumeInfo.previewLink

function Results(props){
    return (
        <div className="container-fluid border">
            <div className="row border">
                <div className="col-md-2">
                    <h2>Title</h2>
                </div>
                <div className="col-md-2">
                    <h2>Authors</h2>
                </div>
                <div className="col-md-4">
                    <h2>Description</h2>
                </div>
                <div className="col-md-2">
                    <h2>Image</h2>
                </div>
                <div className="col-md-2">
                    <h2>Book Link</h2>
                </div>
            </div>
            {props.books ? props.books.map(book =>
            <div className="row border">
                <div className="col-md-2">
                    <h2>{book.title}</h2>
                </div>
                <div className="col-md-2">
                    <h4>{book.authors}</h4>
                </div>
                <div className="col-md-4">
                    <p>{book.description}</p>
                </div>
                <div className="col-md-2">
                    <img src={book.image} alt={'Image of ' + book.title}></img>
                </div>
                <div className="col-md-2">
                    <a href={book.link}>Link to book here</a>
                </div>
            </div>
            ):""}
        </div>
    )
}

export default Results;