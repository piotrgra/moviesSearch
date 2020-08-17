import React, { Component } from 'react';

class Search extends Component {

    state = {
        name: ""
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClick = () => {
        if (this.state.name.length >= 3) {
            this.props.fetchMovies(this.state.name);
        }
    }


    render() {
        return (
            <div>
                <input name="name" type="text" placeholder="wyszukaj film..." value={this.state.name} onChange={this.handleOnChange} />
                <button onClick={this.handleClick}> szukaj</button>
            </div>
        )
    }
}

export default Search;