const { AuthenticationError } = require("apollo-server-express");
const { Author, Topic, Quote } = require("../models");

const resolvers = {
    Query: {
        authors: async () => {
            return Author.find().populate('quotes');
        },
        authorName: async (parent, { name }) => {
            return Author.findOne({ name }).populate('quotes');
        },
        authorID: async (parent, { authorId }) => {
            return Author.findOne({ _id: authorId }).populate('quotes');
        },
        topics: async () => {
            return Topic.find().populate('quotes');
        },
        topic: async (parent, { name }) => {
            return Topic.findOne({ name }).populate('quotes');
        },
    }
}

module.exports = resolvers