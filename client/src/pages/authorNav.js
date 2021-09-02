import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { Container } from "react-bootstrap"

import { QUERY_AUTHOR_ALL } from '../utils/queries';


function AuthorNav() {
    const { loading, data } = useQuery(QUERY_AUTHOR_ALL);
    
    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    // console.log(data);

    const authorList = data.authors;

    const searchFunction = () => {
        let input, filter, ul, li, a, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (let i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) li[i].style.display = ""; 
            else li[i].style.display = "none";
        }
    }

    return (
        <Container className="auttopBody">
            <p>
                <Link className="breadCrumb redText" to={`/`}>Home</Link>{` > `}
                <Link className="breadCrumb redText" to={`/authorNavigation`}>Author</Link>
            </p>
            <input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for names..."></input>
            <ul id="myUL">
                {authorList.map((author) => (
                    <li key={author.name}>
                        <Link to={`/author/${author._id}`}>{author.name}</Link>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default AuthorNav;