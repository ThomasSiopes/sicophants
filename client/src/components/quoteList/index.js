import React from 'react';
import {Link} from 'react-router-dom';

const QuoteList = ({quotes}) => {
    if(!quotes.length) return (<p>No Quotes</p>);

    return (
        <div>
            Quote List:
            {quotes.map((quote) => (
                <p key={quote} className="quote">{quote.quoteText} and also stuff</p>
            ))}
        </div>
    )
}

export default QuoteList;