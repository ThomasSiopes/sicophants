import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import MetaTags from "react-meta-tags";
import { Container, Row, Card, Col } from "react-bootstrap"

import { QUERY_AUTHOR_ALL } from '../utils/queries';


function AuthorNav() {
    const { loading, data } = useQuery(QUERY_AUTHOR_ALL);
    
    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    const authorList = data.authors;

    const searchFunction = () => {
        let input, filter, group, elements, a, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        group = document.getElementById("myGroup");
        elements = group.getElementsByClassName("col-md-3");

        for (let i = 0; i < elements.length; i++) {
            a = elements[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) elements[i].style.display = ""; 
            else elements[i].style.display = "none";
        }
    }

    return (
        <Container className="auttopBody">
            <div className="wrapper">
                <MetaTags>
                    <title>PW - Authors</title>
                    <meta name="twitter:card" content="summary"></meta>
                    <meta name="twitter:title" content="Proverbial Wisdom"></meta>
                    <meta name="twitter:site" content="@proverbial"></meta>

                    <meta property="og:title" content="Proverbial Wisdom"/>
                    <meta property="og:url" content={window.location.href}/>
                    <meta property="og:type" content="website"/>
                </MetaTags>
            </div>
            <p>
                <Link className="breadCrumb redText" to={`/`}>Home</Link>{` > `}
                <Link className="breadCrumb redText" to={`/authorNavigation`}>Author</Link>
            </p>
            <input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for names..."></input>
            <hr></hr>
            <Container className="text-center">
                <Row id="myGroup">
                    {authorList.map((author) => (
                        <Col xs={12} sm={6} md={3} className="pb-1" key={author.name}>
                            <Card>
                                <Link to={`/author/${author._id}`} className="btn btn-red">
                                    <Card.Body>
                                        {author.name}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default AuthorNav;
