import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card } from "react-bootstrap";

import AuthorButton from '../AuthorButton';

import { QUERY_QUOTES_ALL } from '../../utils/queries';

const QuoteRandomQuote = ({amount}) => {
    let quoteList, scatterList = [], randArr = [], randomNum, pass = 0;
    amount = parseInt(amount);

    let {loading, data} = useQuery(QUERY_QUOTES_ALL);
    quoteList = data;
    
    if(!loading) {
        for(let i = 0; i < amount; ++i) {
            do {
                randomNum = Math.floor(Math.random() * quoteList.quotes.length);
                pass = 0
                for(let n of randArr) {
                    if(n === randomNum) {
                        pass = 1;
                    }
                }
            } while (pass);
            scatterList.push(quoteList.quotes[randomNum]);
            randArr.push(randomNum);
        }
    }
    else {
        return <div>Loading...</div>
    }

    return (
        <div>
            {scatterList.map((index) => (                 
                <Card key={index.quoteText} className="mb-2">
                    <Link className="noDecor font-Kaisei" to={`/quote/${index._id}`}>
                        <Card.Body>"{index.quoteText}"</Card.Body>
                    </Link>
                    <Card.Footer>
                        <AuthorButton key={index.authorName} input={index.authorName}></AuthorButton>
                    </Card.Footer>
                </Card>
            ))}
        </div>
    )
}

export default QuoteRandomQuote;
