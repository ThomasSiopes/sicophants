import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

import { QUERY_AUTHOR_ALL } from '../utils/queries';


function AuthorNav() {
    const { loading, data } = useQuery(QUERY_AUTHOR_ALL);
    
    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    console.log(data);

    const authorList = data.authors;

    return (
        <div>
            {authorList.map((author) => (
                <div key={author}>
                    <Link to={`/author/${author._id}`}>{author.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default AuthorNav;