document.getElementById("lastModified").innerHTML = document.lastModified;
const currentyear_span = document.getElementById("currentyear");

let this_year = new Date();
currentyear_span.innerHTML = this_year.getFullYear();