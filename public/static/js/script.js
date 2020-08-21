document.title = websiteName;
const endTime = document.querySelector('.display__end-time');

endTime.textContent = `${websiteName} goes live on ${endDate.toLocaleDateString('en-CH', options)}`;