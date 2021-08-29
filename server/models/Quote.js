const { Schema, model } = require("mongoose");

const quoteSchema = new Schema({
    quoteText: {
        type: String,
        required: true,
        unique: true,
        
    },
    authorName: {
        type: String,
        required: false
    },
    topics: [
        {
            type: String,
        }
    ]
});

const Quote = model("Quote", quoteSchema);

module.exports = Quote;