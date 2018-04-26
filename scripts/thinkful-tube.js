'use strict';

const THINKFUL_TUBE = (function() {

  function handleSubmit() {
    $('.search-form').submit(function(event) {
      event.preventDefault();
      console.log('handleSubmit()');
    });
  }

  return {
    handleSubmit,
  };
}());