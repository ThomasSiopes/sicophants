import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { Container, Row, Col } from "react-bootstrap"

import { QUERY_TOPIC_ALL } from '../utils/queries';


function TopicNav() {
    const { loading, data } = useQuery(QUERY_TOPIC_ALL);
    
    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    const topicList = data.topics;

    const searchFunction = () => {
        let input, filter, group, elements, a, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        group = document.getElementById("myGroup");
        elements = group.getElementsByTagName('div');

        for (let i = 0; i < elements.length; i++) {
            a = elements[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) elements[i].style.display = ""; 
            else elements[i].style.display = "none";
        }
    }

    return (
        <Container className="auttopBody">
            <p>
                <Link className="breadCrumb redText" to={`/`}>Home</Link>{` > `}
                <Link className="breadCrumb redText" to={`/topicNavigation`}>Topics</Link>
            </p>
            
            <input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for topic names..."></input>
            <hr></hr>
            <Row id="myGroup" className="text-center">
                {topicList.map((topic) => (
                    <Col xs={6} sm={4} md={3} key={topic.name} className="mb-2">
                        <Link className="redText breadCrumb" to={`/topic/${topic._id}`}>{topic.name}</Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TopicNav;