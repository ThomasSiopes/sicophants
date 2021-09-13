import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBookReader } from "react-icons/fa";

import RandomQuoteButton from "../RandomQuoteButton";

const FooterPage = () => {
    return (
        <Card id="footer-supreme" className="bg-red text-white mt-4 py-4">
            <Container className="bg-red">
                <Row className="text-center">
                    <Col xs={6} md={3} className="d-flex font-Lato">
                        <Link to={`/`} className="align-self-center navbar-brand text-white"><p><strong><FaBookReader id="footer-Icon"/> Proverbial Wisdom</strong></p></Link>
                    </Col>
                    <Col xs={3} className="d-flex d-none d-md-block">
                        <span className="align-self-center">Proverbial Wisdom is a full-stack project devoted to showcasing my newfound web development skills, utilizing MERN style structuring (MongoDB, Express, React, and NodeJS).</span>
                    </Col>
                    <Col xs={3}>
                        Site
                        <hr></hr>
                        <p><Link className="noDecor text-white" to={`/authorNavigation`}>Authors</Link></p>
                        <p><Link className="noDecor text-white" to={`/topicNavigation`}>Topics</Link></p>
                        <RandomQuoteButton/>
                    </Col>
                    <Col xs={3}>
                        Contact Information
                        <hr></hr>
                        <p><a className="noDecor text-white" href="https://github.com/ThomasSiopes">GitHub</a></p>
                        <p><a className="noDecor text-white" href="https://www.linkedin.com/in/thomas-siopes-001707207/">LinkedIn</a></p>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default FooterPage;
