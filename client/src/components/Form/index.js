import React from 'react';

function Form(props){
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <h2><label>Search for or save Books here</label></h2>
                    <input 
                        onChange={props.handleInputChange}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Please enter your search here"
                        id="search"
                        value={props.search}
                    />
                    <button onClick={props.handleFormSubmit} className="btn">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;