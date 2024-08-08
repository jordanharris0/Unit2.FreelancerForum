//--------- create forum body ----------
const div = document.getElementById("div");

//styling div border
div.style.border = "3px solid black";
div.style.width = "600px";
div.style.height = "800px";
div.style.margin = "auto";

//adding forum title
const title = document.createElement("h1");
title.textContent = "Freelance Forum";
title.style.textAlign = "center";
div.append(title);

//adding average price text
const averageText = document.createElement("p");
averageText.style.textAlign = "center";
averageText.style.fontSize = "large";
div.append(averageText);

//adding available freelancer title
const freelanceTitle = document.createElement("h2");
freelanceTitle.textContent = "Available Freelancers";
freelanceTitle.style.textAlign = "center";
div.append(freelanceTitle);

//creating a table
const table = document.createElement("table");
table.style.margin = "auto";
table.style.border = "1px solid black";
div.append(table);

//creating table head
const thead = document.createElement("thead");
table.appendChild(thead);

//create table headers
const tName = document.createElement("th");
tName.textContent = "Name";
const tOcc = document.createElement("th");
tOcc.textContent = "Occupation";
const tPrice = document.createElement("th");
tPrice.textContent = "Price";
thead.appendChild(tName);
thead.appendChild(tOcc);
thead.appendChild(tPrice);

//styling table headers
tName.style.padding = "15px";
tOcc.style.padding = "15px";
tPrice.style.padding = "15px";

// creating table body
const tbody = document.createElement("tbody");
tbody.style.border = "1px solid black";
table.style.margin = "auto";
table.appendChild(tbody);

//freelancer array
const names = [
  "Dr.Slice",
  "Dr.Pressure",
  "Prof.Possibility",
  "Prof.Prism",
  "Dr.Impulse",
  "Prof.Spark",
  "Dr.Wire",
  "Prof.Goose",
];
const occupation = [
  "Gardener",
  "Programmer",
  "Teacher",
  "Gamer",
  "Diver",
  "Driver",
];
const price = [50, 150, 5, 40, 70, 35, 12, 14, 24, 1200];

//rendered arrays
const renderNames = [
  "Dr.Slice",
  "Dr.Pressure",
  "Prof.Possibility",
  "Prof.Prism",
  "Dr.Impulse",
  "Prof.Spark",
  "Dr.Wire",
  "Prof.Goose",
];
const renderOcc = [
  "Gardener",
  "Programmer",
  "Teacher",
  "Gamer",
  "Diver",
  "Driver",
];
const renderPrice = [50, 150, 5, 40, 70, 35, 12, 14, 24, 1200];

//max people variable
const maxPeople = 10;

//set interval
const randomIntervalId = setInterval(random, 1000);

//render
nameData();

// <---------- functions ---------->

// table loop
function nameData() {
  const nameElements = renderNames.map((name, i) => {
    const row = document.createElement("tr");
    const nameData = document.createElement("td");
    const occData = document.createElement("td");
    const priceData = document.createElement("td");
    nameData.innerText = name;
    occData.innerText = renderOcc[i];
    priceData.innerText = renderPrice[i];
    row.appendChild(nameData);
    row.appendChild(occData);
    row.appendChild(priceData);
    return row;
  });
  tbody.replaceChildren(...nameElements);
  average();
}

//random name, occupation, price function
function random() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOcc = occupation[Math.floor(Math.random() * occupation.length)];
  const randomPrice = price[Math.floor(Math.random() * price.length)];

  renderNames.push([randomName]);
  renderOcc.push([randomOcc]);
  renderPrice.push([randomPrice]);

  if (renderNames.length >= maxPeople) {
    renderNames.splice(2);
    renderOcc.splice(2);
    renderPrice.splice(2);
  }

  nameData();
}

//average price function
function average() {
  const averagePrices = document.querySelector("p");
  const averageTotal = renderPrice.length
    ? renderPrice.reduce((acc, num) => parseInt(acc) + parseInt(num), 0) /
      renderPrice.length
    : 0;
  averagePrices.innerText = `The average starting price is ${parseInt(
    averageTotal
  )}`;
}
