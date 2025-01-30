var articles = document.querySelectorAll(".articles-item");
var button = document.querySelector(".form-button");
var input = document.querySelector(".form-input");

function searchArticles() {
  var text = input.value.toLowerCase();
  articles.forEach(function (article) {
    if (article.textContent.toLowerCase().includes(text)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
button.addEventListener("click", searchArticles);
