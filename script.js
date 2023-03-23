// replace YOUR_API_KEY with your actual API key
const apiKey = '214bc6eb43e8474fa20fc14ef619a371';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const newsContainer = document.querySelector('#news-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(article => {
      const newsCard = `
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="${article.urlToImage}" alt="${article.title}">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
            </div>
          </div>
        </div>
      `;
      newsContainer.innerHTML += newsCard;
    });
  })
  .catch(error => console.error(error));
