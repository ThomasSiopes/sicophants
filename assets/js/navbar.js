let navbar = document.querySelector("#nav-bar");

function generateNavbar() {
    var newNav = document.createElement("nav");
    newNav.classList.add("navbar");
    newNav.classList.add("navbar-expand-md");
    newNav.classList.add("navbar-dark");
    newNav.classList.add("bg-red");
    newNav.innerHTML = '<a class="navbar-brand mx-2" href="index.html" title="Home">Site Name</a>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
      <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="navbarSupportedContent">\
      <ul class="navbar-nav mr-auto">\
        <li class="nav-item">\
          <a class="nav-link" href="./nav_author.html">Authors</a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="./nav_topic.html">Topics</a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="category_navigation.html">Categories</a>\
        </li>\
      </ul>\
    </div>'

    navbar.appendChild(newNav);
}

generateNavbar();