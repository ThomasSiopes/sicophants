import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const FooterPage = () => {
    return (
        <div id="footer-supreme" className="bg-red text-white mt-4 py-5">
            <Container>
                <Row className="text-center">
                    <Col xs={3} className="d-flex font-Lato">
                        <p className="align-self-center"><strong>Proverbial Wisdom</strong></p>
                    </Col>
                    <Col xs={3}>
                        Proverbial Wisdom is a full-stack project devoted to showcasing my newfound web development skills, utilizing MERN style structuring (MongoDB, Express, React, and NodeJS).
                    </Col>
                    <Col xs={6}>
                        Contact Information
                        <hr></hr>
                        <p><a className="noDecor text-white" href="https://github.com/ThomasSiopes">GitHub</a></p>
                        <p><a className="noDecor text-white" href="https://www.linkedin.com/in/thomas-siopes-001707207/">LinkedIn</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterPage;