import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import MetaTags from "react-meta-tags";
import { Container } from "react-bootstrap";
import "../assets/css/index.css";

import { QUERY_AUTHOR_ID } from '../utils/queries';

import QuoteList from "../components/QuoteList";

function AuthorPage() {
    const { authorId } = useParams();

    const { loading, data } = useQuery(QUERY_AUTHOR_ID, {
        variables: { authorId: authorId },
    })

    if(!authorId || authorId === null || authorId === "undefined") return (<Redirect to={`/authorNavigation`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const author = data.authorID;
    
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>PW - {author.name}</title>
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
            <Container className="auttopBody">
                <p>
                    <Link className="breadCrumb redText" to={`/`}>Home</Link>{` > `}
                    <Link className="breadCrumb redText" to={`/authorNavigation`}>Authors</Link>{` > `}
                    <Link className="breadCrumb redText" to={`/author/${author._id}`}>{author.name}</Link>
                </p>
                <p>Quotes from {author.name}</p>
                <QuoteList quotes={author.quotes}/>
            </Container>
        </div>
    )
}

export default AuthorPage;
