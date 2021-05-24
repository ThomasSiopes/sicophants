//fill out topic buttons
//fill out similar quotes

const allData = global_database;

var topics = document.querySelector("#topic-buttons");
var similarities = document.querySelector("#similar-pages");

function quoteGetCurrentIndex() {
    var indexI = topics.textContent.trim();
    console.log("i: " + indexI);
    var indexJ = similarities.textContent.trim();
    console.log("j: " + indexJ);

    topics.textContent = "";
    similarities.textContent = "";

    quoteLoadTopicButtons(indexI, indexJ);
    quoteLoadSimilarPages(indexI, indexJ);
}

function quoteLoadTopicButtons(i, j) {
    var topicButton;
    for(let n = 0; n < allData[i].quotes[j].topics.length; ++n) {
        topicButton = document.createElement("a");
        topicButton.href = "../topic-pages/topic_" + (allData[i].quotes[j].topics[n].replace(/\s+/g, '')) + ".html";
        topicButton.textContent = allData[i].quotes[j].topics[n];
        topicButton.classList.add("btn");
        topicButton.classList.add("btn-red");
        topicButton.classList.add("mx-1");
        topics.appendChild(topicButton);
    }
}

function quoteLoadSimilarPages(i, j) {
    var newElement = document.createElement("card");
    
}

quoteGetCurrentIndex();