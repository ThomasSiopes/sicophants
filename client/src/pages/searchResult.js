import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/index.css";

import Results from "../components/results";

function SearchResults() {    
    const { query } = useParams();
    
    return (
        <div>
            <Container className="auttopBody">
                <h5>Showing search results for "{query}":</h5>
                <Results classif="author" input={query}></Results>
                <Results classif="topic" input={query}></Results>
            </Container>
        </div>
    )
}

export default SearchResults;