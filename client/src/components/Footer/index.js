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
                    <Col xs={7} sm={6} lg={3} className="d-flex font-Lato">
                        <Container className="align-self-center">
                            <Link to={`/`} className="navbar-brand text-white"><strong><FaBookReader id="footer-Icon"/> Proverbial Wisdom</strong></Link>
                        </Container>
                    </Col>
                    <Col xs={3} className="d-flex d-none d-lg-block">
                        <span className="align-self-center">Proverbial Wisdom is a full-stack project devoted to showcasing my newfound web development skills, utilizing MERN style structuring (MongoDB, Express, React, and NodeJS).</span>
                    </Col>
                    <Col xs={5} sm={6}>
                        <Row>
                            <Col xs={12} md={6} className="mb-3">
                                Site
                                <hr></hr>
                                <i>
                                <p><Link className="noDecor text-white" to={`/authorNavigation`}>Authors</Link></p>
                                <p><Link className="noDecor text-white" to={`/topicNavigation`}>Topics</Link></p>
                                <RandomQuoteButton/>
                                </i>
                            </Col>
                            <hr className="d-xs-block d-md-none"/>
                            <Col xs={12} md={6}>
                                Contact Information
                                <hr></hr>
                                <i>
                                <p><a className="noDecor text-white" href="https://github.com/ThomasSiopes">GitHub</a></p>
                                <p><a className="noDecor text-white" href="https://www.linkedin.com/in/thomas-siopes-001707207/">LinkedIn</a></p>
                                <p><a className="noDecor text-white" href="mailto:t.siopes00@yahoo.com">Email</a></p>
                                </i>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default FooterPage;
