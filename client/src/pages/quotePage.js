import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Row, Card, Col } from "react-bootstrap"
import "../assets/css/index.css"

import { QUERY_QUOTE_ID, QUERY_AUTHOR_NAME } from '../utils/queries';

function QuotePage() {
    // query targets are initialized as null objects to avoid loading errors
    let quote = {authorName: null, topics: ["null"]}, author = {_id: 1, quotes: []};
    let quoteList = [], randomQuote, pass;
    const { quoteId } = useParams();

    let { loading, data } = useQuery(QUERY_QUOTE_ID, {
        variables: { quoteId: quoteId },
    });

    if(!loading && data) quote = data.quoteID;

    ({loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: { name: quote.authorName},
    }));

    if(!loading && data) author = data.authorName;

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    for(let i = 0; ((i < 3) && (i < author.quotes.length)); ++i) {
        do {
            pass = 1;
            randomQuote = author.quotes[Math.floor(Math.random() * author.quotes.length)]
            for(let index of quoteList) {
                if(index == randomQuote) {
                    pass = 0;
                }
            }
        } while(!pass)
        quoteList.push(randomQuote);
    }

    console.log(quoteList);
    
    return (
        <Container className="auttopBody mt-3">
            <Row className="mb-3">
                <Col>
                    <Link to={`/`} className="redText breadCrumb">Home</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={8} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Text className="bigQuote font-Kaisei">
                                "{quote.quoteText}"
                            </Card.Text>
                            <Card.Text>
                                <Link to={`/author/${author._id}`} className="authorAttribute">{quote.authorName}</Link>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="text-center">
                            Share Buttons
                        </Card.Body>
                        <Card.Footer className="text-center">
                            {quote.topics.map((topic) => (
                                <Link key={topic} className="btn btn-red mx-1" to={`/`}>{topic}</Link>
                            ))}
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            More quotes attributed to {quote.authorName}
                        </Card.Header>
                        <Card.Body>
                            {quoteList.map((newQuote) => (
                                <p key={newQuote.quoteText} className="font-Kaisei">
                                    <Link to={`/quote/${newQuote._id}`} className="redText breadCrumb">"{newQuote.quoteText}"</Link>
                                </p>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default QuotePage;