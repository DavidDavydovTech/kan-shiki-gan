'use strict';
(() => {
  const companies = {};
  let jobs = {};
  
  const settings = {
    minimizeConnectionless: true,
  };
  try {
    // This button is the most reliable way of detecting a render of
    // the Job Details panel.
    document.arrive('.jobs-apply-button', (el) => {
      const newJob = {
        id: null,
        title: null,
        desc: null,
        company: null,
        companyId: null,
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
      // Company ID | jobs-search-results-list__list-item--active => job-card-container__company-name
      newJob.companyId = document
        .getElementsByClassName('jobs-search-results-list__list-item--active')[0]
        .getElementsByClassName('job-card-container__company-name')[0]
        .href
        .match(/(?<=\/company\/)[^/]{1,}/gi)[0];
        
      // Job Description obs-description-content__text
      newJob.desc = document
        .getElementsByClassName('jobs-description-content__text')[0]
        .getElementsByTagName('span')[0]
        .textContent;

      console.log('New job:', newJob);
    });
    // This detects the rendering of the job listings in the side
    // scroll bar.
    document.arrive('.jobs-search-results__list-item', (el) => {
      console.log('Job Listings:', el);
    });
  } catch (err) { console.error(err); }
})();