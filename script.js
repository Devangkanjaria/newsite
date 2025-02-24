document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual News API key
    const newsContainer = document.getElementById('news-container');

    // Fetch news data from the API
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1a996d4f305c409f8c26c0b76eaefb7a`)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                data.articles.forEach(article => {
                    const newsItem = document.createElement('div');
                    newsItem.classList.add('news-item');

                    const title = document.createElement('h2');
                    title.textContent = article.title;

                    const description = document.createElement('p');
                    description.textContent = article.description;

                    const link = document.createElement('a');
                    link.href = article.url;
                    link.textContent = 'Read more';
                    link.target = '_blank';

                    newsItem.appendChild(title);
                    newsItem.appendChild(description);
                    newsItem.appendChild(link);

                    newsContainer.appendChild(newsItem);
                });
            } else {
                newsContainer.innerHTML = '<p>No news articles found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
        });
});