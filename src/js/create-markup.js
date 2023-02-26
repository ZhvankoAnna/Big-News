import notFound from '../img/not-found.png';
import {boxEl, newsListEl} from './filter'
import {numberOfPagination} from './pagination'

export function createItemMarkup(newsArrey) {
  let itemMarkup;
  let idFromLocal = [];
  const markupArr = newsArrey
    .map(item => {
      if (localStorage.getItem('already read id')) {
        idFromLocal = JSON.parse(localStorage.getItem('already read id'));
      }

      if (idFromLocal.includes(item.id)) {
        itemMarkup = ' overlay-shown';
      } else {
        itemMarkup = '';
      }
      return `<li class="images read-item">
    <img class="news-list__img"
    src="${item.imgUrl}" alt="" width="288px" height="395px" />
    <p class="news-list__category">${item.category}</p>
    <button class="img-btn favorite-false" data-id="${item.id}">Add to favorite</button>
    <h2 class="description-title">${item.title}</h2>
    <p class="description-of-news">${item.descr}</p>
    <div class="info-more">
      <p class="date" data-date="${item.dateKey}">${item.date}</p>
      <a class="read-more-link" href="${item.originUrl}"
      target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
    <div class="read-overlay${itemMarkup}" data-id="${item.id.slice(
        14,
        22
      )}"><p class="overlay-read-text">Have read</p></div>
    </li>`;
    })
    .join('');
  return markupArr;
}

export function createNotFoundMarkup() {
  const markup = `<div class="not-found__box"><p class="not-found__text">We haven’t found news from this category</p>
  <img class="not-found__img" src="${notFound}" alt="News not found" width="248px" height="198px" /></div>`;
  newsListEl.innerHTML = markup;
  document.querySelector(`.weather`).innerHTML = ``;
  numberOfPagination.innerHTML = '';
}

export function createFilterMarkup(arr) {
  let categoriesArr;
  let btnArr;
  let markup;

  if (window.innerWidth >= 1280) {
    btnArr = arr
      .map((item, index) => {
        if (index <= 5) {
          return `<li><button class="filter-btn" data-value="${item.section}">${item.display_name}</button></li>`;
        } else {
          return;
        }
      })
      .join('');
    categoriesArr = arr
      .map((item, index) => {
        if (index > 5) {
          return `<li class="filter-item" data-value="${item.section}">${item.display_name}</li>`;
        } else {
          return;
        }
      })
      .join('');

    markup = `<ul class="filter-btn-list">${btnArr}</ul>
    <div><button class="filter-dropdowv-btn" data-value="others">Others</button>
    <ul class="filter-list visually-hidden">${categoriesArr}</ul></div>`;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    btnArr = arr
      .map((item, index) => {
        if (index <= 3) {
          return `<li><button class="filter-btn" data-value="${item.section}">${item.display_name}</button></li>`;
        } else {
          return;
        }
      })
      .join('');
    categoriesArr = arr
      .map((item, index) => {
        if (index > 3) {
          return `<li class="filter-item" data-value="${item.section}">${item.display_name}</li>`;
        } else {
          return;
        }
      })
      .join('');

    markup = `<ul class="filter-btn-list">${btnArr}</ul>
    <div><button class="filter-dropdowv-btn" data-value="others">Others</button>
    <ul class="filter-list visually-hidden">${categoriesArr}</ul></div>`;
  } else if (window.innerWidth < 768) {
    categoriesArr = arr
      .map(item => {
        return `<li class="filter-item" data-value="${item.section}">${item.display_name}</li>`;
      })
      .join('');
    markup = `<button class="filter-dropdowv-btn" data-value="categories">Categories</button>
      <ul class="filter-list visually-hidden">${categoriesArr}</ul>`;
  }

  boxEl.innerHTML = markup;
}