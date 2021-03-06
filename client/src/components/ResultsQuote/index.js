import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Card, Col, Row } from "react-bootstrap";

import TopicButton from "../TopicButton"
import AuthorButton from "../AuthorButton"

import { QUERY_QUOTES_ALL } from '../../utils/queries';

const ResultsQuote = ({input}) => {
    let quoteList, newList = [];

    let {loading, data} = useQuery(QUERY_QUOTES_ALL);
    quoteList = data;

    input = input.toUpperCase();
    
    if(loading) return <p>Loading...</p>

    for(let index of quoteList.quotes) {
        if(index.quoteText.toUpperCase().indexOf(input) > -1) newList.push(index);
    }

    if(newList[0]) {
        return (
            <Container className="mb-2">
                <div>
                    <h5>Results under quotes</h5>
                    <hr></hr>
                    <Row className="text-start">
                        {newList.map((index) => (
                            <Col xs={12} sm={6} md={4} className="mb-3" key={index.name}>
                                <Card>
                                    <Link to={`/quote/${index._id}`} className="noDecor">
                                        <Card.Body className="font-Kaisei">"{index.quoteText}"</Card.Body>
                                    </Link>
                                    <Card.Body>
                                        <AuthorButton key={index.authorName} input={index.authorName}></AuthorButton>
                                    </Card.Body>
                                    {index.topics[0] &&
                                        <Card.Footer className="text-center">
                                            {index.topics.map((topic) => (
                                                <TopicButton key={topic} input={topic}></TopicButton>
                                            ))}
                                        </Card.Footer>
                                    }
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        )
    }
    
    return (
        <Container>
            <h5>No results under quotes...</h5>
        </Container>
    )
}

export default ResultsQuote;
