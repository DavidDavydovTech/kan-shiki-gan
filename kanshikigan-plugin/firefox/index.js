'use strict';
(() => {
  console.log('Now, how about drums?')
  console.log('Base Drums!')
  const settings = {
    minimizeConnectionless: true,
  };

  document.arrive('.jobs-details__main-content', (el) => {
    console.log('Worked')
    console.log('Arrive:', el)
  });
  console.log('Snare Drums!');
  // const jobListElement = document.getElementsByClassName('jobs-search-results__list')[0];
  // if (jobListElement === undefined || jobListElement === null) console.error("COULD NOT GET JOB LIST");

  // const jobDetailParentElement = document.getElementsByClassName('jobs-search__right-rail')[0];
  // if (jobDetailElement === undefined || jobDetailElement === null) console.error("COULD NOT GET JOB DETAIL");

  // jobList.observe(jobListElement, { childList: true });
  // jobDetail.observe(jobDetailElement, { childList: true });  

  // const jobList = new MutationObserver((changes) => {
  //   const {
  //     minimizeConnectionless
  //   } = settings;
  
  //   const newJobs = [];
  //   for (let change of changes) {
  //     if (change.addedNodes.length > 0) {
  //       const { addedNodes } = change;
  //       for (let element of addedNodes) {
  //         if (element.nodeName === "LI") {
  //           newJobs.push(element);
  //         }
  //       }
  //     }
  //   }
  
  //   if (newJobs.length > 0) console.log("Found new jobs!~", newJobs);
  // });

  // jobList.observe(jobListElement, { childList: true });
})();