'use strict';

const TEMPLATE = (function() {

  function createThumbnails(video) {
    return `
      <li>
      <h2>${video.title}</h2>
      <a href="#"><img src="${video.thumbnail}" alt="${video.title}"></a>
      </li>
    `;
  }

  return {
    createThumbnails,
  };
}());