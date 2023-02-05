const newslistEl = document.querySelector('.news-wrapper');

newslistEl.addEventListener('click', handleLinkClick);

function handleLinkClick(e) {
  if (!e.target.classList.contains('read-more-link')) {
    return;
  }
  e.target.parentNode.nextElementSibling.classList.add(`overlay-shown`);

  let readArr = [];
  // const keyArr = [];
  let idArr = [];
  let today = new Date();
  console.log(today)
  const date =
    today.getDate() < 10
      ? today.getDate().toString().padStart(2, 0)
      : today.getDate();
  const month =
    today.getMonth() < 10
      ? (today.getMonth() + 1).toString().padStart(2, 0)
      : today.getMonth() + 1;
  const year = today.getFullYear();
  const dateKey = `${date}/${month}/${year}`;
  const dateNow = today.getTime();
  console.log(dateKey)

  const newsId = e.target.parentNode.parentNode.children[2].dataset.id;

  const newsObj = {
    id: e.target.parentNode.parentNode.children[2].dataset.id,
    imgUrl: e.target.parentNode.parentNode.children[0].src,
    category: e.target.parentNode.parentNode.children[1].textContent,
    title: e.target.parentNode.parentNode.children[3].textContent,
    descr: e.target.parentNode.parentNode.children[4].textContent,
    date: e.target.previousElementSibling.textContent,
    originUrl: e.target.href,
    dateKey,
    dateNow,
  };

  // if (localStorage.getItem('id')) {
  //   const arrFromLocal = JSON.parse(localStorage.getItem('id'));
  //   idArr.push(...arrFromLocal);
  // }
  if (localStorage.getItem('read')) {
    console.log('readArr', readArr)

    readArr = JSON.parse(localStorage.getItem('read'));
    idArr = readArr.map(item => item.id);
    console.log('readArr', readArr)
    console.log('idArr', idArr);
    if (idArr.includes(`${newsId}`)) {
      return;
    } else {
      readArr.push(newsObj);
      localStorage.setItem('read', JSON.stringify(readArr));
    }
  } else {
    readArr.push(newsObj);
    localStorage.setItem('read', JSON.stringify(readArr));
  }

  // else {
  // idArr.push(newsId);
  // localStorage.setItem('id', JSON.stringify(idArr));

  //   e.target.parentNode.parentNode.classList.add('have-read');

  //   if (localStorage.getItem('read')) {
  //     const keysFromLocal = JSON.parse(localStorage.getItem('read'));
  //     keyArr.push(...keysFromLocal);
  //     if (!keyArr.includes(dateKey)) {
  //       keyArr.push(dateKey);
  //     }
  //     localStorage.setItem('read', JSON.stringify(keyArr));
  //   } else {
  //     const key = [];
  //     key.push(dateKey);
  //     localStorage.setItem('read', JSON.stringify(key));
  //   }

  //   if (localStorage.getItem(`${dateKey}`)) {
  //     const arrLocalNews = JSON.parse(localStorage.getItem(`${dateKey}`));
  //     arrLocalNews.push(newsObj);
  //     localStorage.setItem(`${dateKey}`, JSON.stringify(arrLocalNews));
  //   } else {
  //     readArr.push(newsObj);
  //     localStorage.setItem(`${dateKey}`, JSON.stringify(readArr));
  //   }
  // }
}
