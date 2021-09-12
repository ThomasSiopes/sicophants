import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container } from "react-bootstrap"
import "../assets/css/index.css"

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

    // console.log(data);

    const author = data.authorID;
    
    return (
        <div>
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
