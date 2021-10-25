import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import MetaTags from "react-meta-tags";
import "../assets/css/index.css";

import Results from "../components/Results";
import ResultsQuote from "../components/ResultsQuote";

function SearchResults() {    
    const { query } = useParams();

    if(!query || query === null || query === "undefined") return (<Redirect to={`/`}/>);
    
    return (
        <Container className="auttopBody">
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
                    <meta property="og:image" content="/assets/images/proverbial_icon.png"/>
                </MetaTags>
            </div>
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
