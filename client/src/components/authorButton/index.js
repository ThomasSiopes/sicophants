import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_AUTHOR_NAME } from '../../utils/queries';

const AuthorButton = ({input}) => {
    
    let {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: { name: input },
    });

    if(loading || !data) return <p>Loading...</p>
    
    const author = data.authorName;

    if(author) return (<Link to={`/author/${author._id}`} className="authorAttribute">{author.name}</Link>)
    else return (<p></p>);
}
export default AuthorButton;