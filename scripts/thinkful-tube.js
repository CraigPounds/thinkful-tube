/* global DATA TEMPLATE */
'use strict';

const THINKFUL_TUBE = (function() {

  // function buildQuery(searchTerm) {
  //   const query = {
  //     q: searchTerm,
  //     part: 'snippet',
  //     key: DATA.API_KEY,
  //   };
  //   return query;
  // }

  // function getDataFromAPI(searchTerm) {
  //   $.getJSON(DATA.END_POINT, buildQuery(searchTerm), callBack);
  // }

  function getDataFromAPI(searchTerm) {
    const settings = {
      url: DATA.END_POINT,
      data: {
        q: searchTerm,
        part: 'snippet',
        key: DATA.API_KEY,
      },
      dataType: 'json',
      type: 'GET',
      success: callBack,
    };
    $.ajax(settings);
  }

  function callBack(response) {
    DATA.videos = [];
    response.items.forEach(item => {
      const video = {};
      video.id = item.id.videoId;
      video.title = item.snippet.title;
      video.thumbnail = item.snippet.thumbnails.default.url;
      DATA.videos.push(video);
    });
    render();
  }

  function handleSubmit() {
    $('.search-form').submit((event) => {
      event.preventDefault();
      getDataFromAPI($('.search-input').val());      
      $('.search-input').val('');
      $('.search-input').focus();
    });
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

/*
  Make the images clickable, playing them in a lightbox
  Show a link for more from the channel that each video came from
  Show buttons to get more results (using the previous and next page links from the JSON)
*/
