document.body.style.border = "5px solid red";
let observer = new MutationObserver((...args) => {
    console.log('ADDED NEW ELEMENTS!~')
});
const jobList = document.getElementsByClassName("jobs-search-results__list")
observer.observe(jobList, {});