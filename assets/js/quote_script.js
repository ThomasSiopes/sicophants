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
    //make a function for the quotes by author and one for the quotes by topic
    similarities.appendChild(loadSimilarAuthor(i,j));
    // similarities.appendChild(loadSimilarTopic(i,j));
}

function loadSimilarAuthor(indexI, indexJ) {
    indexI = parseInt(indexI, 10);
    indexJ = parseInt(indexJ, 10);

    let newChild = document.createElement("div");
    let newCard = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let newLink = document.createElement("a");
    let newLine;
    
    newChild.classList.add("col");
    newChild.classList.add("col-lg-12");
    newChild.classList.add("pb-3");

    newCard.classList.add("card");
    cardHeader.classList.add("card-header");
    cardBody.classList.add("card-body");

    cardHeader.textContent = "More quotes from "
    newLink.textContent = allData[indexI].author;
    newLink.href = "../author-pages/author_" + (allData[indexI].author.replace(/\s+/g, '')) + ".html";
    cardHeader.appendChild(newLink);
    newCard.appendChild(cardHeader);
    
    let linkCount = 0;
    if(allData[indexI].quotes.length >= 3) {
        for(let n = (indexJ+1); linkCount < 3; ++n) {
            console.log(n);
            newLink = document.createElement("a");
            newLink.classList.add("quote-links");
            newLine = document.createElement("p");
            if(n != indexJ) {
                if(n >= allData[indexI].quotes.length && indexJ != 0) {
                    n = 0;
                }
                newLink.textContent = "\"" + allData[indexI].quotes[n].quote + "\"";
                console.log(newLink.textContent);
                newLink.href = "../quote-pages/quote_" + (allData[indexI].author.replace(/\s+/g, '')) + "_" + (n+1) + ".html";
                newLine.appendChild(newLink);
                cardBody.appendChild(newLine);
                linkCount++;
            }
        }
    }
    else {
        if(allData[indexI].quotes.length == 2) {
            newLink = document.createElement("a");
            newLink.classList.add("quote-links");
            newLine = document.createElement("p");
            if(allData[indexI].quotes[indexJ+1]) {
                newLink.textContent = "\"" + allData[indexI].quotes[indexJ+1].quote + "\"";
                console.log(newLink.textContent);
                newLink.href = "../quote-pages/quote_" + (allData[indexI].author.replace(/\s+/g, '')) + "_" + (indexJ+1) + ".html";
            }
            else {
                newLink.textContent = "\"" + allData[indexI].quotes[indexJ-1].quote + "\"";
                console.log(newLink.textContent);
                newLink.href = "../quote-pages/quote_" + (allData[indexI].author.replace(/\s+/g, '')) + "_" + (indexJ-1) + ".html";
            }
            newLine.appendChild(newLink)
            cardBody.appendChild(newLine);
        }
    }

    newCard.appendChild(cardBody);
    newChild.appendChild(newCard);

    if(linkCount) return newChild;
}

function loadSimilarTopic(indexI, indexJ) {
    
}

function topic_compiler() {

}

quoteGetCurrentIndex();