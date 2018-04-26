'use strict';

const TEMPLATE = (function() {

  function createResults() {
    return `
      <li>
      <h2>testing</h2>
      <a href="#"></a>
      </li>
    `;
  }

  return {
    createResults,
  };
}());