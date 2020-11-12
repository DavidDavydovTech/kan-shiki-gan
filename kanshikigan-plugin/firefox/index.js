'use strict';
(function () {
  const settings = {
    minimizeConnectionless: true,
  };
  
  const runOnInterval = (apps) => {
    let currentRegex = /\*{0,}/g;
    window.setInterval(function() {
      
    }, 200)
  }

  const jobListElement = document.getElementsByClassName("jobs-search-results__list")[0];
  if (jobListElement === undefined || jobListElement === null) console.error("COULD NOT GET JOB LIST");
  const jobDetailElement = document.getElementsByClassName("jobs-details__main-content")[0];
  if (jobDetailElement === undefined || jobDetailElement === null) console.error("COULD NOT GET JOB DETAIL");
  
  const jobList = new MutationObserver((changes) => {
    const {
      minimizeConnectionless
    } = settings;
  
    const newJobs = [];
    for (let change of changes) {
      if (change.addedNodes.length > 0) {
        const { addedNodes } = change;
        for (let element of addedNodes) {
          if (element.nodeName === "LI") {
            newJobs.push(element);
          }
        }
      }
    }
  
    if (newJobs.length > 0) console.log("Found new jobs!~", newJobs);
  });

  const jobDetail = new MutationObserver((changes) => {
    const newJob = {
      jobId: window.location.search,
    }

    console.log(newJob);
  });

  jobList.observe(jobListElement, { childList: true });
  jobDetail.observe(jobDetailElement, { childList: true });  
})();