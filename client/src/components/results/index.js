import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container } from "react-bootstrap";

import { QUERY_AUTHOR_ALL, QUERY_TOPIC_ALL } from '../../utils/queries';

const Results = ({classif, input}) => {
    let authList, topList, newList = [];

    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    authList = data;

    ({loading, data} = useQuery(QUERY_TOPIC_ALL));
    topList = data;

    input = input.toUpperCase();
    console.log(input);
    if(classif === "author") {
        for(let index of authList.authors) {
            if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
        }
    } else if(classif === "topic") {
        for(let index of topList.topics) {
            if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
        }
    }

    return (
        <Container>
            <div>
                <h5>Results under {classif}s</h5>
                <ul>
                    {newList.map((index) => (
                        <li key={index.name}>
                            <Link to={`/${classif}/${index._id}`}>{index.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default Results;