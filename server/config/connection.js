const mongoose = require("mongoose");

mongoose.connect(
    // process.env.MONGODB_URI || 'mongodb://localhost/proverbial',
    "mongodb+srv://tsiopes00:Sepois00@cluster0.supq7.mongodb.net/proverbial?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;