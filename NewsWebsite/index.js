let source = "india";
let apiKey = "e37b2284b41ff3f6d81e503887e9f667";

let newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnews.io/api/v4/search?q=${source}&token=${apiKey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
            <div class="card-header" id="heading${index + 1}">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${
                  index + 1
                }" aria-expanded="true" aria-controls="collapse${index + 1}">
                  ${element.title}
                </button>
              </h5>
            </div>
        
            <div id="collapse${
              index + 1
            }" class="collapse " aria-labelledby="heading${
        index + 1
      }" data-parent="#accordion">
              <div class="card-body">
               ${element.content}. <a href=${
        element.url
      } target="_blank">Read More...</a>
              </div>
            </div>
          </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some Error Occured");
  }
};
xhr.send();
