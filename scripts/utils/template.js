'use strict';

const TEMPLATE = (function() {

  function createThumbnails(video) {
    return `
      <li>
        <h2>${video.title}</h2>
        <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img src="${video.thumbnail}" alt="${video.title}"></a>
      </li>
    `;
  }

  return {
    createThumbnails,
  };
}());