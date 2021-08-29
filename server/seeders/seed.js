const db = require("../config/connection");
const { Author, Topic, Quote } = require("../models");
const authorSeeds = require("./authorSeeds.json");
const topicSeeds = require("./topicSeeds.json");
const quoteSeeds = require("./quoteSeeds.json");

db.once("open", async () => {
    try {
        await Quote.deleteMany({});
        await Author.deleteMany({});
        await Topic.deleteMany({});

        await Author.create(authorSeeds);
        await Topic.create(topicSeeds);
        
        for(let i = 0; i < quoteSeeds.length; i++) {
            const { _id, authorName, topics } = await Quote.create(quoteSeeds[i]);
            const author = await Author.findOneAndUpdate(
                { name: authorName },
                {
                    $addToSet: {
                        quotes: _id,
                    },
                }
            );
            for(let n = 0; n < topics.length; n++)
            {
                const topic = await Topic.findOneAndUpdate(
                    { name: topics[n] },
                    {
                        $addToSet: {
                            quotes: _id,
                        },
                    }
                );
            }
        }

    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Seed complete");
    process.exit(0);
});