import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Card, Col, Row } from "react-bootstrap";

import { QUERY_AUTHOR_ALL, QUERY_TOPIC_ALL } from '../../utils/queries';

const Results = ({classif, input}) => {
    let authList, topList, newList = [];

    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    authList = data;

    ({loading, data} = useQuery(QUERY_TOPIC_ALL));
    topList = data;

    input = input.toUpperCase();
    console.log(input);

    if(loading) return <p>Loading...</p>

    if(classif === "author") {
        for(let index of authList.authors) {
            if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
        }
    } else if(classif === "topic") {
        for(let index of topList.topics) {
            if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
        }
    }

    if(newList[0]) {
        return (
            <Container className="mb-2">
                <div>
                    <h5>Results under {classif}s</h5>
                    <hr></hr>
                    <Row className="text-center">
                        {newList.map((index) => (
                            <Col xs={12} sm={6} md={4} className="mb-2" key={index.name}>
                                <Container>
                                    <Card>
                                        <Link to={`/${classif}/${index._id}`} className="btn btn-red">
                                                <Card.Body>
                                                    {index.name}
                                                </Card.Body>
                                        </Link>
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
            <h5>No results under {classif}s...</h5>
            <hr></hr>
        </Container>
    )
}

export default Results;