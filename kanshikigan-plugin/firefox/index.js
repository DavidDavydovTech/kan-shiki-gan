const settings = {
  minimizeConnectionless: true,
};

const jobList = document.getElementsByClassName("jobs-search-results__list")[0];
if (jobList === undefined || jobList === null) console.error("COULD NOT GET JOB LIST");

const observer = new MutationObserver((changes) => {
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
console.log(jobList);
observer.observe(jobList, { childList: true });
