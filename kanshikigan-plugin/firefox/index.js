'use strict';
(() => {
  let jobs = {};
  
  const settings = {
    minimizeConnectionless: true,
  };
  document.arrive('.jobs-details__main-content', (el) => {
    console.log('Raw search:', window.location.search)
    console.log('Current Job ID:', window.location.search.match(/(?<=\?.{0,})(currentJobId\=[^=&]{0,})/gi));
    console.log('Job Details:', el);
  });
  document.arrive('.jobs-search-results__list-item', (el) => {
    console.log('Job Listings:', el);
  });
})();