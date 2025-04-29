//Q1 1- create a web page that open existing small window and scroll it’s content to the end .
let myWindow = window.open(
  "window.html",
  "Small Window",
  "width=200,height=200px"
);

let currentPos = myWindow.scrollY;
let myint = setInterval(() => {
  myWindow.scroll(0, currentPos + 50);
  if (myWindow.scrollY === currentPos) {
    clearInterval(myint);
    // a- check if the small window still opened, close it.
    if (!myWindow.closed) {
      myWindow.close();
    }
  } else {
    currentPos = myWindow.scrollY;
  }
}, 100);

// b- Try to write your name on the small window document using
// myWindow.document.write("adel"); //error window is closed

//Q2
//a- Find all images in page by two ways (document default collection and document methods).
let allImagesO1 = document.images;
let allImagesO2 = document.querySelectorAll("img");

//b- Find all options for City drop down list.
let cities = document.querySelectorAll("#city option");
for (let city of cities) {
  console.log(city.innerHTML);
}

//c- Find all rows(tds) for second table in page.
let tables = document.querySelectorAll("table");
let secondTable = tables[1];
let tds = secondTable.querySelectorAll("td");
for (let td of tds) {
  console.log(td.innerHTML);
}

//d- Find all elements that contain class name fontBlue and BGrey.
let fontFound = document.querySelectorAll(".fontBlue .BGrey");
console.log(fontFound);

//Q3
setInterval(() => {
  document.title = new Date().toLocaleString();
}, 1000);

//Q4
let queryStorage = {};
let queries = window.location.search;
if (queries) {
  queries = queries.substring(1);
  queries = queries.split("&");

  queries.forEach((query) => {
    let [key, value] = query.split("=");
    queryStorage[key] = value;
  });

  console.log(queryStorage);
}
