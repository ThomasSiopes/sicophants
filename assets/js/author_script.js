const allData = global_database;

var quote_cards = document.querySelector("#quote-cards");

function authorGetCurrentIndex() {
    var indexI = quote_cards.textContent.trim();
    console.log("i: " + indexI);

    quote_cards.textContent = "";

    authorLoadQuotes(indexI);
}

function authorLoadQuotes(i) {
    let newColumn;
    let newAuthorCard;
    let quoteLink;
    let siteLinks;
    let cardFooter;
    for(let n = 0; n < allData[i].quotes.length; ++n) {
        newColumn = document.createElement("div");
        newColumn.classList.add("col-md-12");
        newColumn.classList.add("col-lg-6");
        newColumn.classList.add("col-xl-4");
        newColumn.classList.add("pb-3");
        
        newAuthorCard = document.createElement("div");
        newAuthorCard.classList.add("card");

        quoteLink = document.createElement("a");
        quoteLink.classList.add("quote-link");
        quoteLink.href = "../quote-pages/quote_" + (allData[i].author.replace(/\s+/g, '')) + "_" + (n+1) + ".html";

        siteLinks = document.createElement("div");
        siteLinks.classList.add("row");

        cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        cardFooter.classList.add("text-center");

        quoteLink.innerHTML = "<div class=\"card-body\">\
            <div class=\"row pb-2\">\
                <div class=\"col\">\
                    <div class=\"author-page-quote\">\"" + allData[i].quotes[n].quote + "\"</div>\
                </div>\
            </div>\
        </div>";

        siteLinks.innerHTML = "<div class=\"col text-center bottom-links\">\
            <a class=\"fa fa-facebook\" href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F" + window.location.href + "\"></a>\
            <a class=\"fa fa-twitter\" href=\"https://twitter.com/intent/tweet?url=http%3A%2F%2F" + window.location.href + "\"></a>\
            <a class=\"fa fa-reddit\" href=\"https://www.reddit.com/submit?url=https%3A%2F%2F" + window.location.href + "\"></a>\
        </div>";

        let newTopicButton;
        for(let k = 0; k < allData[i].quotes[n].topics.length;++k) {
            newTopicButton = document.createElement("a");
            newTopicButton.classList.add("btn");
            newTopicButton.classList.add("btn-red");
            newTopicButton.classList.add("button-topic");
            newTopicButton.href = "../topic-pages/topic_" + (allData[i].quotes[n].topics[k].replace(/\s+/g, '')) + ".html";
            newTopicButton.textContent = allData[i].quotes[n].topics[k];
            cardFooter.appendChild(newTopicButton);
        }

        newAuthorCard.appendChild(quoteLink);
        newAuthorCard.appendChild(siteLinks);
        newAuthorCard.appendChild(cardFooter);
        newColumn.appendChild(newAuthorCard);
        quote_cards.appendChild(newColumn);
    }
}

authorGetCurrentIndex();