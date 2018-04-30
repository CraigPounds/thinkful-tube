'use strict';

const TEMPLATE = (function() {

  function createThumbnails(video) {
    return `
      <li>
        <h2>${video.title}</h2>
        <a ata-fancybox="gallery" href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img src="${video.thumbnail}" alt="thumbnail for ${video.title}"></a>
      </li>
    `;
  }

  return {
    createThumbnails,
  };
}());