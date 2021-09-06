const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        quotes: [Quote]!
        htmlName: String
    }

    type Topic {
        _id: ID
        name: String
        quotes: [Quote]!
        htmlName: String
    }

    type Quote {
        _id: ID
        quoteText: String
        authorName: String
        topics: [String]!
    }

    type Query {
        authorName(name: String): Author
        authorID(authorId: ID): Author
        authors: [Author]
        topicName(name: String): Topic
        topicID(topicId: ID): Topic
        topics: [Topic]
        quotes: [Quote]
        quoteID(quoteId: ID!): Quote
    }
`;

module.exports = typeDefs;