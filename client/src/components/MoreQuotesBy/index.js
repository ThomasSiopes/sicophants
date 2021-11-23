import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const MoreQuotesBy = (parent) => {
    let author, quoteList = [], randomQuote, pass;
    
    console.log("Parent: ")    
    console.log(parent.parent)

    const {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: { name: parent.parent.authorName },
    });

    if(loading) return <p>Loading...</p>

    author = data.authorName;

    for(let i = 0; ((i < 3) && (i < author.quotes.length)); ++i) {
        do {
            pass = 1;
            randomQuote = author.quotes[Math.floor(Math.random() * author.quotes.length)]
            for(let index of quoteList) {
                if(index === randomQuote) {
                    pass = 0;
                }
            }
        } while(!pass)
        quoteList.push(randomQuote);
    }

    return(
        <div>
            <Card>
                <Card.Header>
                    Assorted quotes attributed to {parent.parent.authorName}
                </Card.Header>
                <Card.Body>
                    {quoteList.map((newQuote) => (
                        <p key={newQuote.quoteText} className="font-Kaisei">
                            <Link to={`/quote/${newQuote._id}`} className="redText breadCrumb">"{newQuote.quoteText}"</Link>
                        </p>
                    ))}
                </Card.Body>
            </Card>
        </div>
    )
}

export default MoreQuotesBy;