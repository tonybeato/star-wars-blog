/**
 * Data Needed
 * ------------------
 * 
 * - Title            (X)
 * - Publish Date     (X)
 * - Category         (X)
 * - Featured Image   (X)
 * - Post Content     (X)
 * 
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import formatDate from './formatDate';

const API_URL = 'https://wordpress.altos.dev/wp-json/wp/v2/posts?_embed';

const quoteList = document.getElementsByClassName('row quote-list');


const listQuote = data => {
  let container = quoteList[0];

  container.innerHTML += `
  <article id="q-${data.id}" class="quote quote-${data.id} box-1-1 box-md-1-2">
    <div class="inner">
      <header class="img-container">
        <img src="${data.img_attachment}">
      </header>
      <div class="post-content">
        <h2 class="blog-post-title">${data.title}</h2>
        <div class="blog-post-meta">
          <span class="meta-date">${data.date} | </span>
          <span class="meta-category">${data.category}</span>
        </div>
        <p class="blog-post-excerpt">${data.excerpt}</p>
      </div>
    </div>
  </article>
  `;

}

async function getPostData() {
  let response = await fetch(API_URL);
  let data = await response.json();
  return data;
}

getPostData().then(data => {

  let quotes = [];

  data.forEach(d => {

    let quote = {
      'id': d.id,
      'title': d.title.rendered,
      'content': d.content.rendered,
      'excerpt': d.excerpt.rendered,
      'date': formatDate(d.date),
      'category': d._embedded["wp:term"][0][0].name,
      'img_attachment': d._embedded["wp:featuredmedia"][0].source_url
    }

    console.log(quote);
    quotes.push(quote);
  })

  return quotes;

}).then(quotes => {
  quotes.forEach(q => {
    listQuote(q);
  })

})