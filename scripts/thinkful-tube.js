/* global DATA */
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
    });
  }

  function callBack(response) {
    console.log(response);
  }
  return {
    handleSubmit,
  };
}());