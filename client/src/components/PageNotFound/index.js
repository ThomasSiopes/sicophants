import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
    return (
        <Container className="auttopBody">
            <Link className="breadCrumb redText" to={`/`}>Home</Link>
            <h4 className="pt-3 text-center">404 Error: Page not found.</h4>
            <h4 className="text-center">Something must've gone wrong!</h4>
        </Container>
    );
}

export default ErrorPage;
