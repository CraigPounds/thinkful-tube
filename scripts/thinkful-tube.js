/* global DATA TEMPLATE */
'use strict';

const THINKFUL_TUBE = (function() {

  function buildQuery(searchTerm) {
    const query = {
      q: searchTerm,
      part: 'snippet',
      key: DATA.API_KEY,
    };
    //console.log(query);
    return query;
  }

  function handleSubmit() {
    $('.search-form').submit((event) => {
      event.preventDefault();
      //buildQuery($('.search-input').val());
      $.getJSON(DATA.END_POINT, buildQuery($('.search-input').val()), callBack);
      $('.search-input').val('');
    });
  }

  function callBack(response) {
    //console.log(response.items);
    DATA.videos = [];
    response.items.forEach(item => {
      const video = {};
      video.id = item.id.videoId;
      video.title = item.snippet.title;
      video.thumbnail = item.snippet.thumbnails.high.url;
      DATA.videos.push(video);
    });
    //console.log(DATA.videos);
    render();
  }

  function render() {
    $('.results').html(TEMPLATE.createResults());
  }

  return {
    handleSubmit,
  };
}());