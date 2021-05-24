const allData = global_database;
let authorList = document.querySelector("#myUL");

function fillAuthorList() {
    let newAuthorName;
    let newLink;
    for(let i = 0; i < allData.length; ++i) {
        newAuthorName = document.createElement("li");
        newLink = document.createElement("a");

        newLink.textContent = allData[i].author;
        newLink.href="./author-pages/author_" + (allData[i].author.replace(/\s+/g, '')) + ".html";

        newAuthorName.appendChild(newLink);
        authorList.appendChild(newAuthorName);
    }
}

fillAuthorList();