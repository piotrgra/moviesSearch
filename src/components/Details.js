import React, { Component } from 'react';

class Details extends Component {

    componentDidMount() {
        this.props.loadMovie(this.props.match.params.movieId);
    }
    render() {
        const { data, loadingMovie } = this.props;
        if (!loadingMovie && data !== null) {
            return (

                <table border="1">
                    <tbody>
                        <tr>
                            <td rowSpan="6"><img src={data.Poster} alt="" /></td>
                        </tr>
                        <tr>
                            <td>Tytul: {data.Title} </td>
                        </tr>
                        <tr>
                            <td>Rezyser: {data.Director} </td>
                        </tr>
                        <tr>
                            <td>Aktorzy: {data.Actors} </td>
                        </tr>
                        <tr>
                            <td>Rok produkcji: {data.Year}</td>
                        </tr>                        <tr>
                            <td>Opis: {data.Plot}</td>
                        </tr>
                    </tbody>
                </table>

            )
        } else {
            return <h1>Laduje dla ciebie film</h1>
        }
    }
}

export default Details;