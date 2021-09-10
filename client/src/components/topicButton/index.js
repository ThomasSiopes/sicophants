import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_TOPIC_NAME } from '../../utils/queries';

const TopicButton = ({input}) => {
    
    let {loading, data} = useQuery(QUERY_TOPIC_NAME, {
        variables: { name: input },
    });

    if(loading || !data) return <p>Loading...</p>
    
    const topic = data.topicName;

    if(topic) return (<Link to={`/topic/${topic._id}`} className="btn btn-red mx-1 mb-1">{topic.name}</Link>)
    else return (<p></p>);
}
export default TopicButton;