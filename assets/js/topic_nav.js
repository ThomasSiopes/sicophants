const allData = global_database;
let topicList = document.querySelector("#myUL");

function fillAuthorList() {
    topicArray = topic_compiler();

    let newTopicName;
    let newLink;
    for(let i = 0; i < topicArray.length; ++i) {
        newTopicName = document.createElement("li");
        newLink = document.createElement("a");

        newLink.textContent = topicArray[i];
        newLink.href="./topic-pages/topic_" + (topicArray[i].replace(/\s/g, '')) + ".html";

        newTopicName.appendChild(newLink);
        topicList.appendChild(newTopicName);
    }
}

function topic_compiler() {
    var topicARR = [];
    for(var i = 0; i < allData.length; ++i) {
        for(var j = 0; j < allData[i].quotes.length; ++j) {
            let inChecker = 0;
            for(var k = 0; k < allData[i].quotes[j].topics.length; ++ k) {
                for(var l = 0; l < topicARR.length; ++l) {
                    if(topicARR[l] == allData[i].quotes[j].topics[k]) inChecker = 1;
                }
                if(inChecker === 0) topicARR.push(allData[i].quotes[j].topics[k]);
            }
        }
    }
    return topicARR;
}

fillAuthorList();