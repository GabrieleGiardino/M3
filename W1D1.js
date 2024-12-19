window.addEventListener('DOMContentLoaded', function () {
    const twitterLink = document.querySelector('aside .p-4 ol li:nth-child(2) a');
    if (twitterLink) {
        twitterLink.parentElement.removeChild(twitterLink);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.querySelector(".jumbotron a.font-weight-bold");
    if (readMoreLink) {
        readMoreLink.addEventListener("click", function (event) {
            event.preventDefault();
            this.closest(".jumbotron").remove();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const authors = document.querySelectorAll(".blog-post-meta a");
    authors.forEach(function (author) {
        author.addEventListener("mouseover", function () {
            alert("Autore: " + this.textContent);
        });
    });
});
