import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_AUTHOR_ALL, QUERY_TOPIC_ALL } from '../../utils/queries';

const QuoteRandom = ({classif, amount}) => {
    let authList, topList, scatterList = [], randArr = [], randomNum, pass = 0;
    amount = parseInt(amount);

    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    authList = data;

    ({loading, data} = useQuery(QUERY_TOPIC_ALL));
    topList = data;
    
    if(!loading && authList && topList) {
        if(classif === "author") {
            for(let i = 0; i < amount; ++i) {
                do {
                    randomNum = Math.floor(Math.random() * authList.authors.length);
                    pass = 0
                    for(let n of randArr) {
                        if(n === randomNum) {
                            pass = 1;
                        }
                    }
                } while (pass);
                scatterList.push(authList.authors[randomNum]);
                randArr.push(randomNum);
            }
        } else if (classif === "topic") {
            for(let i = 0; i < amount; ++i) {
                do {
                    randomNum = Math.floor(Math.random() * topList.topics.length);
                    pass = 0
                    for(let n of randArr) {
                        if(n === randomNum) {
                            pass = 1;
                        }
                    }
                } while (pass);
                scatterList.push(topList.topics[randomNum]);
                randArr.push(randomNum);
            }
        } 
    }
    else {
        return <div>Loading...</div>
    }

    return (
        <div>
            {scatterList.map((index) => ( 
                <p key={index.name}><Link className="redText breadCrumb" to={`/${classif}/${index._id}`}>{index.name}</Link></p>
            ))}
        </div>
    )
}

export default QuoteRandom;
