import React, { Component } from 'react';
import PlaceHolder from '../containers/PlaceHolder';
import { Spinner, Col, Row, Button, Container } from "react-bootstrap";


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
                            <Container>
                                <Row>
                                    {movies.map((movie, i) => (
                                        <Col xs={6} md={4} key={i}>
                                            <PlaceHolder movie={movie} />

                                        </Col>
                                    ))}
                                </Row>
                            </Container>

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
            return <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            Loading...
          </Button>
        }

    }
}
export default MoviesList;
