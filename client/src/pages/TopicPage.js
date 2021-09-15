import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container } from "react-bootstrap"
import "../assets/css/index.css"

import { QUERY_TOPIC_ID } from '../utils/queries';

import QuoteList from "../components/QuoteList";

function TopicPage() {
    const { topicId } = useParams();

    const { loading, data } = useQuery(QUERY_TOPIC_ID, {
        variables: { topicId: topicId },
    })

    if(!topicId || topicId === null || topicId === "undefined") return (<Redirect to={`/topicNavigation`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const topic = data.topicID;
    
    return (
        <div>
            <Container className="auttopBody">
                <p>
                    <Link className="breadCrumb redText" to={`/`}>Home</Link>{` > `}
                    <Link className="breadCrumb redText" to={`/topicNavigation`}>Topics</Link>{` > `}
                    <Link className="breadCrumb redText" to={`/topic/${topic._id}`}>{topic.name}</Link>
                </p>
                <p>Quotes from {topic.name}</p>
                <QuoteList quotes={topic.quotes}/>
            </Container>
        </div>
    )
}

export default TopicPage;
