document.body.style.border = "5px solid red";

const jobList = document.getElementsByClassName("jobs-search-results__list")[0];
if (jobList === undefined || jobList === null) console.error('COULD NOT GET JOB LIST')
const observer = new MutationObserver((changes) => {
    console.log('ADDED NEW ELEMENTS!~', changes)
});
console.log(jobList);
observer.observe(jobList, {childList: true});