import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Card, Col, Row } from "react-bootstrap";

import { QUERY_QUOTES_ALL } from '../../utils/queries';

const ResultsQuote = ({input}) => {
    let quoteList, newList = [];

    let {loading, data} = useQuery(QUERY_QUOTES_ALL);
    quoteList = data;

    input = input.toUpperCase();
    console.log(input);
    
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
                    <Row className="text-center">
                        {newList.map((index) => (
                            <Col xs={6} className="mb-2" key={index.name}>
                                <Container>
                                    <Card>
                                        <Link to={`/quote/${index._id}`} className="noDecor">
                                            <Card.Body>
                                                <p>"{index.quoteText}"</p>
                                                <Link to={`/`} className="authorAttribute">{index.authorName}</Link>
                                            </Card.Body>
                                        </Link>
                                        <Card.Footer>
                                            {index.topics}
                                        </Card.Footer>
                                    </Card>
                                </Container>
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