const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
    htmlName: {
      type: String,  
      required: true,
    },
});

const Author = model("Author", authorSchema);

module.exports = Author;