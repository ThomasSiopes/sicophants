// template for author object:
// {
//     "author": "Maya Angelou",
//     "quotes": [
//         {"quote": "Nothing will work unless you do.", "topics": ["Action", "Stuff"]},
//     ]
// },
// Only include comma on previous line if it's NOT the last author in the pile
// Same rule applies to the list of quotes: if it's the last one, don't put a comma there

var global_database = [
    //Angelou, Maya
    {
        "author": "Maya Angelou",
        "quotes": [
            {"quote": "Nothing will work unless you do.", "topics": ["Action"], "categories": []}
        ]
    },
    //Edison, Thomas
    {
        "author": "Thomas Edison",
        "quotes": [
            {"quote": "Genius is one per cent inspiration and ninety-nine per cent perspiration.", "topics": ["Action"], "categories": []},
            {"quote": "We shall have no better conditions in the future if we are satisfied with all those which we have at present.", "topics": ["Complacency"], "categories": []},
            {"quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "topics": ["Giving Up", "Stick-to-itiveness"], "categories": []},
            {"quote": "Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discouraged. That's not the place to become discouraged.", "topics": ["Giving Up"], "categories": []},
            {"quote": "Many of life's failures are men who did not realize how close they were to success when they gave up.", "topics": ["Giving Up"], "categories": []},
            {"quote": "The successful person makes a haibt of doing what the failing person doesn't like to do.", "topics": ["Habit"], "categories": []},
            {"quote": "When you have exhausted all possibilities, remember this - you haven't.", "topics": ["Impossibility"], "categories": []},
            {"quote": "I am not discouraged, because every wrong attempt discarded is another step forward.", "topics": ["Trial and Error"], "categories": []},
            {"quote": "Great ideas originate in the muscles.", "topics": ["Motivation"], "categories": []}
        ]
    },
    //Billings, Josh
    {
        "author": "Josh Billings",
        "quotes": [
            {"quote": "I never knew anybody to get stung by hornets, if they kept away from them. It's just the same way with bad company.", "topics": ["Association"], "categories": []},
            {"quote": "Debt is like any other trap - easy enough to get into but awfully hard to get out of.", "topics": ["Debt"], "categories": []},
            {"quote": "My plan in business is always to pay as I go. If I can't pay, I don't go. Now, I don't know that my plan is any better than anybody else's plan, but I'll guarantee this: if you will follow it, you'll never bust.", "topics": ["Debt"], "categories": []},
            {"quote": "Numbers of people look upon what they haven't got as about the only thing worth having.", "topics": ["Discontent"], "categories": []},
            {"quote": "There are a great many excuses that are worse than the offense.", "topics": ["Excuses"], "categories": []},
            {"quote": "When a man loses his health, then he first begins to take good care of it.", "topics": ["Health"], "categories": []},
            {"quote": "I think most men had rather be charged with malice than with making a blunder.", "topics": ["Insecurity"], "categories": []},
            {"quote": "Occasions are rare; and those who know how to seize upon them are rarer.", "topics": ["Opportunity"], "categories": []},
            {"quote": "The greatest thief this world has ever produced is procrastination, and he is still at large.", "topics": ["Procrastination"], "categories": []},
            {"quote": "It ain’t no disgrace for a man to fall, but to lie there and grunt is.", "topics": ["Self-Pity"], "categories": []},
            {"quote": "The best creed we can have is charity towards the creeds of others.", "topics": ["Tolerance"], "categories": []},
            {"quote": "Successful writers learn at last what they should learn at first - to be intelligently simple.", "topics": ["Writing"], "categories": []},
            {"quote": "Every man thinks his neighbor is happier than he is; but if he swapped places with him tonight, he'll hang around and try to get him to rue back before breakfast next morning.", "topics": ["Greener Grass"], "categories": []},
        ]
    }
]

module.exports = global_database;