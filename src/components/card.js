import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //

  const artCard = document.createElement("div");
  artCard.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  const author = document.createElement("div");
  author.classList.add("author");
  const imgContain = document.createElement("div");
  imgContain.classList.add("img-container");
  const authorImg = document.createElement("img");
  authorImg.src = article.authorPhoto;
  const spanAuthor = document.createElement("span");
  spanAuthor.textContent = article.authorName;

  artCard.appendChild(headline);
  artCard.appendChild(author);
  author.appendChild(imgContain);
  imgContain.appendChild(authorImg);
  author.appendChild(spanAuthor);

  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  artCard.addEventListener("click", (event) => {
    console.log(article.headline);
  });

  return artCard;
  //
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // i think?
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((response) => {
      // creating a card from each and every article obj
      const bsArt = response.data.articles.bootstrap;
      bsArt.forEach((bsArt) => {
        document.querySelector(selector).appendChild(Card(bsArt));
      });
      const jsArt = response.data.articles.javascript;
      jsArt.forEach((jsArt) => {
        document.querySelector(selector).appendChild(Card(jsArt));
      });
      const jqueryArt = response.data.articles.jquery;
      jqueryArt.forEach((jqueryArt) => {
        document.querySelector(selector).appendChild(Card(jqueryArt));
      });
      const nodeArt = response.data.articles.node;
      nodeArt.forEach((nodeArt) => {
        document.querySelector(selector).appendChild(Card(nodeArt));
      });
      const techArt = response.data.articles.technology;
      techArt.forEach((techArt) => {
        document.querySelector(selector).appendChild(Card(techArt));
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//this was kinda hard

// console.log(axios.get("https://lambda-times-api.herokuapp.com/articles"));

export { Card, cardAppender };
