const date = new Date();

// To set the min data for the data picker
document.querySelector('#date-setter').min = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();