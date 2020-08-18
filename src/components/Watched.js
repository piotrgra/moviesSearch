import React, { Component } from 'react';
import PlaceHolder from '../containers/PlaceHolder';
import { Col, Row, Container } from "react-bootstrap";

class Watched extends Component {

    render() {
        const { movies } = this.props;
        console.log(movies);
        if (true) {
            return (
                <Container>
                    <Row>
                        {movies.map((movie, i) => (
                            <Col xs={6} md={4} key={i}>
                                <PlaceHolder movie={movie.movie} stars={movie.stars} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            )
        } else {
            return <h1>Brak filmow</h1>
        }

    }
}

export default Watched;