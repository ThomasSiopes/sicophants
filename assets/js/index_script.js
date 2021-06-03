const allData = global_database;

var topics = document.querySelector("#topic-list");
var authors = document.querySelector("#author-list");

function listAuthors() {
    var alreadyList = [];
    var newRand;
    var passSwitch;
    var newAuthorLink;
    var newAuthorBox;
    for(var i = 0; (i < 10) && (i < allData.length); ++i) {
        newRand = getRandomInt(allData.length);
        if(alreadyList.includes(newRand)) {
            passSwitch = 0;
            while(passSwitch === 0) {
                newRand = getRandomInt(allData.length);
                passSwitch = 1;
                if(alreadyList.includes(newRand)) {
                    passSwitch = 0;
                }
            }
        }

        alreadyList.push(newRand);
        newAuthorLink = document.createElement("a");
        newAuthorLink.textContent = allData[newRand].author;
        newAuthorLink.href = "./author-pages/author_" + (allData[newRand].author.replace(/\s+/g, '')) + ".html";
        newAuthorBox = document.createElement("p");

        newAuthorBox.appendChild(newAuthorLink);
        authors.appendChild(newAuthorBox);
    }
}

function listTopics() {
    var alreadyList = [];
    var topicList = compileTopicList();
    var newRand;
    var passSwitch;
    var newTopicLink;
    var newTopicBox;

    for(var i = 0; (i < 10) && (i < topicList.length); ++i) {
        newRand = getRandomInt(topicList.length);
        if(alreadyList.includes(newRand)) {
            passSwitch = 0;
            while(passSwitch === 0) {
                newRand = getRandomInt(topicList.length);
                passSwitch = 1;
                if(alreadyList.includes(newRand)) {
                    passSwitch = 0;
                }
            }
        }
        alreadyList.push(newRand);
        newTopicLink = document.createElement("a");
        newTopicLink.textContent = topicList[newRand];
        newTopicLink.href = "./topic-pages/topic_" + (topicList[newRand].replace(/\s+/g, '')) + ".html";
        newTopicBox = document.createElement("p");

        newTopicBox.appendChild(newTopicLink);
        topics.appendChild(newTopicBox);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function compileTopicList() {
    var topicList = [];
    for(var i = 0; i < allData.length; ++i) {
        for(var n = 0; n < allData[i].quotes.length; ++n) {
            for(var m = 0; m < allData[i].quotes[n].topics.length; ++m) {
                if(!(topicList.includes(allData[i].quotes[n].topics[m]))) {
                    topicList.push(allData[i].quotes[n].topics[m]);
                }
            }
        }
    }
    return topicList;
}

listAuthors();
listTopics();