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
        topic(name: String): Topic
        topics: [Topic]
        quotes(name: String): [Quote]
        quote(quoteId: ID!): Quote
    }
`;

module.exports = typeDefs;