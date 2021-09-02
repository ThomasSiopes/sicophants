import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Row, Col, Card, Button } from "react-bootstrap"

import { QUERY_TOPIC_NAME } from '../../utils/queries';

const QuoteList = ({quotes}) => {
    if(!quotes.length) return (<p>No Quotes...</p>);

    console.log(quotes);

    const mapTopicLink = async (topic, event) => {
        event.preventDefault();

        try {
            console.log(topic);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    return (
        <div>
            <Row>
                {quotes.map((quote) => (
                    <Col md={12} lg={6} xl={4} key={quote.quoteText}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Text>"{quote.quoteText}"</Card.Text>
                            </Card.Body>
                            <Card.Footer className={"text-center"}>
                                {quote.topics.map((topic) => (
                                    <button key={topic} className={"btn btn-red"}>{topic}</button>
                                ))}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default QuoteList;