// template for author object:
// {
//     "author": "Maya Angelou",
//     "quotes": [
//         {"quote": "Nothing will work unless you do.", "topics": ["Action", "Stuff"]},
//     ]
// },
// Only include comma on previous line if it's NOT the last author in the pile
// Same rule applies to the list of quotes: if it's the last one, don't put a comma there

var database = [
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

var fillSpace = document.querySelector("#content");

function loadPage() {
    for(var i = 0; i < database.length; i++) {
        var newAuthor = document.createElement("h1");
        var newCard;
        var newCol;

        newAuthor.textContent = database[i].author;
        fillSpace.appendChild(newAuthor);
        
        for(var j = 0; j < database[i].quotes.length; j++) {
            newCol = document.createElement("div");
            newCol.classList.add("col-12");
            newCol.classList.add("col-md-6");
            newCol.classList.add("col-lg-4");

            newCard = generateCard(database[i].quotes[j], database[i].author);
            newCol.appendChild(newCard);

            fillSpace.appendChild(newCol);
        }
    }
}

function generateCard(inputObject, author) {
    var card = document.createElement("div");
    var cardBody = document.createElement("div");
    var cardText = document.createElement("p");
    var authorAttribution = document.createElement("a");
    var cardFooter = document.createElement("div");
    var topicButton;

    card.classList.add("card");
    card.classList.add("mb-3");
    cardBody.classList.add("card-body");
    cardText.classList.add("card-text");
    cardFooter.classList.add("card-footer");
    cardFooter.classList.add("d-flex");
    cardFooter.classList.add("justify-content-center");

    cardText.textContent = "\"" + inputObject.quote + "\"";
    cardBody.appendChild(cardText);

    authorAttribution.textContent = author;
    authorAttribution.href = "author-pages/" + author + ".html";
    cardBody.appendChild(authorAttribution);

    for(var k = 0; k < inputObject.topics.length; k++) {
        topicButton = document.createElement("a");
        topicButton.href = "topic-pages/" + inputObject.topics[k] + ".html";
        topicButton.textContent = inputObject.topics[k];
        topicButton.classList.add("btn");
        topicButton.classList.add("btn-primary");
        topicButton.classList.add("mx-2");
        cardFooter.appendChild(topicButton);
    }

    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    return card;
}

loadPage();