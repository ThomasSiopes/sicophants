import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card } from "react-bootstrap";

import AuthorButton from '../AuthorButton';

import { QUERY_QUOTES_ALL } from '../../utils/queries';

const QuoteCard = (input) => {
    const quote = input.input;
    const testPath = "url(/assets/images/countries/" + quote.authorName.replace(/\s/g, '') + ".png)";
    
    return (
        <Card className="mb-2">
            <Link className="noDecor font-Kaisei" to={`/quote/${quote._id}`}>
                <Card.Body className="countryBG" style={{backgroundImage: testPath}}>"{quote.quoteText}"</Card.Body>
            </Link>
            <Card.Footer>
                <AuthorButton input={quote.authorName}></AuthorButton>
            </Card.Footer>
        </Card>
    )
}

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
        <div className="px-2">
            {scatterList.map((index) => (                 
                <QuoteCard input={index} key={index.quoteText}/>
            ))}
        </div>
    )
}

export default QuoteRandomQuote;
