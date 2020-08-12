import React from 'react';
import "../index.css";

const PlaceHolder = () => {
    return (

        <div className="placeholder">
            <img height="181" width="135" alt="" />
            <div>
                <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label className="full" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label className="full" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label className="full" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label className="full" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label className="full" title="Sucks big time - 1 star"></label>
                </fieldset>
                <input type="checkbox" />
            </div>
            
        </div>
    )
}

export default PlaceHolder;