import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_AUTHOR_ID } from '../utils/queries';

import QuoteList from "../components/quoteList";

function AuthorPage() {
    const { authorId } = useParams();

    const { loading, data } = useQuery(QUERY_AUTHOR_ID, {
        variables: { authorId: authorId },
    })

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    console.log(data);

    const author = data.authorID;
    
    return (
        <div>
            <p>This is {author.name}'s page.</p>
            <QuoteList quotes={author.quotes}/>
        </div>
    )
}

export default AuthorPage;