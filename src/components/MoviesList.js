import React, { Component } from 'react';
import PlaceHolder from '../containers/PlaceHolder';

class MoviesList extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }
    render() {
        const { loading, error, movies } = this.props;
        if (!loading) {
            if (!error) {
                if (movies !== undefined) {
                    if (movies.length > 0) {
                        return (
                            <>
                                {movies.map((movie, i) => (
                                    <PlaceHolder movie={movie} key={i} />
                                ))}


                            </>
                        )
                    } else {
                        return <h1>Podaj nazwe filmu ktorego chcesz wyszukac</h1>
                    }
                } else {
                    return <h1>Nie mam filmu ktory moge Tobie pokazac. Sprobuj wyszukac cos innego.</h1>
                }

            } else {
                return <h1>Cos poszlo nie tak...</h1>
            }
        } else {
            return <h1>Wczytuje sie dla Ciebie...</h1>
        }

    }
}
export default MoviesList;