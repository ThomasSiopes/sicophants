import React from "react";
import { Link, } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import MetaTags from "react-meta-tags";
import "../assets/css/index.css";

import QuoteRandom from "../components/QuoteRandom";
import QuoteRandomQuote from "../components/QuoteRandomQuote";

function Main() {
    return (
        <Container>
            <div className="wrapper">
                <MetaTags>
                    <title>Proverbial Wisdom</title>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content="Proverbial Wisdom"/>
                    <meta name="twitter:site" content="@proverbial"/>
                    <meta name="twitter:url" content={window.location.href}/>
                    <meta name="twitter:description" content="A collection of proverbial quotes!"/>
                    <meta name="twitter:image" content="/assets/images/proverbial_icon.png"/>

                    <meta property="og:title" content="Proverbial Wisdom"/>
                    <meta property="og:url" content={window.location.href}/>
                    <meta property="og:type" content="website"/>
                </MetaTags>
            </div>
            <Row className="mt-3 py-3 auttopBody">
                <Col className="text-center">
                    <h3>Proverbial Wisdom Homepage</h3>
                </Col>
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
