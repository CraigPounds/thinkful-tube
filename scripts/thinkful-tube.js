/* global DATA TEMPLATE */
'use strict';

const THINKFUL_TUBE = (function() {

  function buildQuery(searchTerm) {
    const query = {
      q: searchTerm,
      part: 'snippet',
      key: DATA.API_KEY,
    };
    return query;
  }

  function handleSubmit() {
    $('.search-form').submit((event) => {
      event.preventDefault();
      $.getJSON(DATA.END_POINT, buildQuery($('.search-input').val()), callBack);
      $('.search-input').val('');
    });
  }

  function callBack(response) {
    console.log(response.items);
    DATA.videos = [];
    response.items.forEach(item => {
      const video = {};
      video.id = item.id.videoId;
      video.title = item.snippet.title;
      video.thumbnail = item.snippet.thumbnails.default.url;
      DATA.videos.push(video);
    });
    console.log(DATA.videos);
    render();
  }

  function render() {
    const results = DATA.videos.map(video => {
      return TEMPLATE.createThumbnails(video);
    });
    $('.results').html(results.join(''));    
  }

  return {
    handleSubmit,
  };
}());