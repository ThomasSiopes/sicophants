import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/index.css";

import QuoteRandom from "../components/quoteRandom";
import QuoteRandomQuote from "../components/quoteRandomQuote";

function Main() {
    return (
        <Container>
            <Row className="mt-3 auttopBody">
                <Col xs={2}>
                    <Link className="breadCrumb redText" to={`/`}>Home</Link>
                </Col>
                <Col xs={8} className="text-center">
                    <h3>Proverbial Wisdom Homepage</h3>
                </Col>
                <Col xs={2}></Col>
            </Row>
            <Row className="mt-3 text-center">
                <Col xs={12} md={8} className="auttopBody mb-2 me-3">
                    <Row>
                        <Col xs={6}>
                            <p>Popular Authors</p>
                            <hr></hr>
                            <QuoteRandom classif="author" amount="10"/>
                            <Link className="btn btn-red" to={`/authorNavigation`}>All Authors</Link>
                        </Col>
                        <Col xs={6}>
                            <p>Popular Topics</p>
                            <hr></hr>
                            <QuoteRandom classif="topic" amount="10"/>
                            <Link className="btn btn-red" to={`/topicNavigation`}>All Topics</Link>
                        </Col>
                    </Row>
                </Col>
                <Col className="auttopBody mb-2">
                    <p>Random Quotes</p>
                    <hr></hr>
                    <QuoteRandomQuote amount="3"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;