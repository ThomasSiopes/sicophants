import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container } from "react-bootstrap"
import MetaTags from "react-meta-tags";
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
            <div className="wrapper">
                <MetaTags>
                    <title>PW - {topic.name}</title>
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
