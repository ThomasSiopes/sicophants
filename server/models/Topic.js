const { Schema, model } = require("mongoose");

const topicSchema = new Schema({
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
      required: false,
    },
});

const Topic = model("Topic", topicSchema);

module.exports = Topic;