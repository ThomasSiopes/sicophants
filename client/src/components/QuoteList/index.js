import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import TopicButton from "../TopicButton"
import AuthorButton from "../AuthorButton"

const QuoteList = ({quotes}) => {
    if(!quotes.length) return (<p>No Quotes...</p>);

    // console.log(quotes);

    return (
        <div>
            <Row>
                {quotes.map((quote) => (
                    <Col md={12} lg={6} xl={4} key={quote.quoteText}>
                        <Card className="mb-3">
                            <Link to={`/quote/${quote._id}`} className="noDecor">
                                <Card.Body>
                                    <Card.Text className="font-Kaisei">"{quote.quoteText}"</Card.Text>
                                </Card.Body>
                            </Link>
                            <Card.Body>
                                <AuthorButton key={quote.authorName} input={quote.authorName}></AuthorButton>
                            </Card.Body>
                            { quote.topics[0] &&
                                <Card.Footer className={"text-center"}>
                                    {quote.topics.map((topic) => (
                                        <TopicButton key={topic} input={topic}></TopicButton>
                                    ))}
                                </Card.Footer>
                            }
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default QuoteList;
