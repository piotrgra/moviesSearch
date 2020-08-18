import React, { Component } from 'react';
import "../index.css";
import Card from 'react-bootstrap/Card'

class PlaceHolder extends Component {

    handleRating = (e, imdbID) => {
        this.props.addToWatched(imdbID, e.target.id)

    }
    handleAddWatch = (e) => {
        this.props.addToWishlist(e.target.value);
    }

    render() {
        const { Title, Year, imdbID, Poster } = this.props.movie;
        
        return (

            <Card>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Text>{Title} ({Year})</Card.Text>
                    <Card.Text className="text-muted">Do obejrzenia: <input value={imdbID} onClick={this.handleAddWatch} type="checkbox" /></Card.Text>
                </Card.Body>

                <Card.Footer>
                    <fieldset className="rating" onClick={(e) => this.handleRating(e, imdbID)}>
                        <input type="radio" id="star5" name="rating" value="5" /><label className="full" title="Awesome - 5 stars" id="5"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label className="full" title="Pretty good - 4 stars" id="4"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label className="full" title="Meh - 3 stars" id="3"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label className="full" title="Kinda bad - 2 stars" id="2"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label className="full" title="Sucks big time - 1 star" id="1"></label>
                    </fieldset>
                </Card.Footer>
            </Card>

        )
    }
}

export default PlaceHolder;