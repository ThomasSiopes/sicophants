import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import "../assets/css/index.css";

import Results from "../components/results";
import ResultsQuote from "../components/resultsQuote";

function SearchResults() {    
    const { query } = useParams();

    if(!query || query === null || query === "undefined") return (<Redirect to={`/`}/>);
    
    return (
        <Container className="auttopBody">
            <div className="mb-3"><Link className="breadCrumb redText" to={`/`}>Home</Link> {`>`} Search {`>`} Showing results for "{query}"</div>
            <Container>
                <Results classif="author" input={query}></Results>
                <Results classif="topic" input={query}></Results>
                <ResultsQuote input={query}></ResultsQuote>
            </Container>
        </Container>
    )
}

export default SearchResults;