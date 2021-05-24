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
            {"quote": "Nothing will work unless you do.", "topics": ["Action"]}
        ]
    },
    //Edison, Thomas
    {
        "author": "Thomas Edison",
        "quotes": [
            {"quote": "Genius is one per cent inspiration and ninety-nine per cent perspiration.", "topics": ["Action"]},
            {"quote": "We shall have no better conditions in the future if we are satisfied with all those which we have at present.", "topics": ["Complacency"]},
            {"quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "topics": ["Giving Up", "Stick-to-itiveness"]},
            {"quote": "Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discouraged. That's not the place to become discouraged.", "topics": ["Giving Up"]},
            {"quote": "Many of life's failures are men who did not realize how close they were to success when they gave up.", "topics": ["Giving Up"]},
            {"quote": "The successful person makes a haibt of doing what the failing person doesn't like to do.", "topics": ["Habit"]},
            {"quote": "When you have exhausted all possibilities, remember this - you haven't.", "topics": ["Impossibility"]},
            {"quote": "I am not discouraged, because every wrong attempt discarded is another step forward.", "topics": ["Trial and Error"]},
            {"quote": "Great ideas originate in the muscles.", "topics": ["Motivation"]}
        ]
    }
]

module.exports = global_database;