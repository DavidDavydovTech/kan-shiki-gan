'use strict';
(() => {
  let jobs = {};
  
  const settings = {
    minimizeConnectionless: true,
  };
  try {
    // This button is the most reliable way of detecting a render of
    // the Job Details panel.
    document.arrive('.jobs-apply-button', (el) => {
      const newJob = {
        title: null,
        company: null,
        id: null,

      }
      // The LinkedIn ID of a job.
      newJob.id = window
        .location
        .search
        .match(/(?<=\?.{0,})(?<=currentJobId\=)[^=&]{0,}/gi)[0];
      // The title of a job.
      newJob.title = document
        .getElementsByClassName('jobs-details-top-card__job-title')[0]
        .textContent
        .replace(/[ ]{2,}/gi, '')
        .replace(/[\n\t\r]{0,}/gi, '');
      // Company Name
      newJob.company = document
        .getElementsByClassName('jobs-details-top-card__company-url')[0]
        .textContent
        .replace(/[ ]{2,}/gi, '')
        .replace(/[\n\t\r]{0,}/gi, '');

      console.log('New job:', newJob);
    });
    // This detects the rendering of the job listings in the side
    // scroll bar.
    document.arrive('.jobs-search-results__list-item', (el) => {
      console.log('Job Listings:', el);
    });
  } catch (err) { console.error(err); }
})();