import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/index.css";

import QuoteRandom from "../components/quoteRandom";

function Main() {
    return (
        <div>
            <Container>
                <Row className="mt-3 auttopBody">
                    <Col>
                        <Link className="breadCrumb redText" to={`/`}>Home</Link>
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col xs={12} md={8} className="auttopBody mb-2 me-3">
                        <Row>
                            <Col xs={6}>
                                <p>Popular Authors</p>
                                <QuoteRandom classif="author" amount="10"/>
                                <Link className="btn btn-red" to={`/authorNavigation`}>All Authors</Link>
                            </Col>
                            <Col xs={6}>
                                <p>Popular Topics</p>
                                <QuoteRandom classif="topic" amount="10"/>
                                <Link className="btn btn-red" to={`/topicNavigation`}>All Topics</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="auttopBody mb-2">
                        Random Quotes
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;