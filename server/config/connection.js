const mongoose = require("mongoose");

mongoose.connect(
    // Dynamic port connection
    process.env.MONGODB_URI || 'mongodb://localhost/proverbial',
    // Forced Atlas connection
    // "mongodb+srv://tsiopes00:Sepois00@cluster0.supq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;