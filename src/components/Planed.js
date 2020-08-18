import React, { Component } from 'react';
import PlaceHolder from '../containers/PlaceHolder';
import { Col, Row, Container } from "react-bootstrap";

class Planed extends Component {

    render() {
        const { movies } = this.props;
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
            return <h1>Brak filmow</h1>
        }

    }
}

export default Planed;