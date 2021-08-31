import { gql } from "@apollo/client";

export const QUERY_AUTHOR_NAME = gql`
    query authorName($name: String) {
        authorName(name: $name) {
            _id
            name
            quotes {
                _id
                quoteText
                topics
            }
        }
    }
`;

export const QUERY_AUTHOR_ID = gql`
    query authorID($authorId: ID!) {
        authorID(authorId: $authorId) {
            _id
            name
            quotes {
                _id
                quoteText
                topics
            }
        }
    }
`;

export const QUERY_AUTHOR_ALL = gql`
    query getAuthors {
        authors {
            _id
            name
            quotes {
                _id
                quoteText
                topics
            }
        }
    }
`;

export const QUERY_TOPIC = gql`
    query topic($name: String) {
        topic(name: $name) {
            _id
            name
            quotes {
                _id
                quoteText
                topics
            }
        }
    }
`;

export const QUERY_TOPIC_ALL = gql`
    query getTopics {
        topics {
            _id
            name
            quotes {
                _id
                quoteText
                topics
            }
        }
    }
`;

//Need info on how to query quotes
