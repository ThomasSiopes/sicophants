import React from "react"
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_QUOTES_ALL } from "../../utils/queries";

const RandomQuoteButton = () => {
    let { loading, data } = useQuery(QUERY_QUOTES_ALL);

    if(loading) return <p>Loading...</p>;

    const quotes = data.quotes;
    let randID = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <Link className="noDecor text-white" to={`/quote/${randID._id}`}>Random Quote</Link>
    );
}

export default RandomQuoteButton