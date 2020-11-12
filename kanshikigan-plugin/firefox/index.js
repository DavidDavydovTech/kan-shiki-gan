'use strict';
(() => {
  const state = {

  }
  const settings = {
    minimizeConnectionless: true,
  };
  document.arrive('.jobs-details__main-content', (el) => {
    console.log('Job Details:', el);
  });
  document.arrive('.jobs-search-results__list-item', (el) => {
    console.log('Job Listings:', el);
  });
})();