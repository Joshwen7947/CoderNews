const url =
	'https://newsapi.org/v2/top-headlines?country=us&apiKey=a33faca6a113424f9f9119b4147a897b';

// const weather =
// 	'http://api.weatherapi.com/v1/current.json?key=<280747ed37014f38be9113631210907>&q=London';

async function getArticles() {
	const response = await fetch(url);
	const json = await response.json();
	const { articles } = json;
	document.getElementById('title').innerHTML = `CoderNews`;
	const articlesHTML = articles.map(renderArticle);
	document.getElementById('newsList').innerHTML = articlesHTML.join('');
}
getArticles();

// async function getWeather() {
// 	const response = await fetch(weather);
// 	const json = await response.json();
// 	const { weather } = json;
// 	document.getElementById(`weather`).innerHTML = `london`;
// }
// getWeather();

function renderArticle(article) {
	return `<li class="mb-3 align-self-center article">
	<div id="title">
	${article.title}
	</div>
	<div class="happy">
	<img src="${article.urlToImage}" alt="Snow" />
  </div>
	<i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
	<h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
  <p><i class="fa fa-envelope"></i>${article.content}</p>
</li>
`;
}
renderArticle();

function fetchArticles() {
	// fetch(url, object);
	const r = fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=a33faca6a113424f9f9119b4147a897b`
	).then((r) => {
		console.log({ r });
	});
}
// function newArticles() {}

// const languages = [`ar`, `zh`, `en`, `fr`, `es`, `ru`, `vn`];

// function createLanguageList() {
// 	const languageHTML = languages.map(
// 		(l) =>
// 			`<a href="http://http://127.0.0.1:5500/index.html?language=${l}">${l}</a>`
// 	);
// 	document.getElementById('languages').innerHTML = languageHTML;
// }
// createLanguageList();
