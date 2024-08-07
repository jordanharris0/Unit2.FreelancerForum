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
div.appendChild(title);

//adding average price text
const averageText = document.createElement("p");
averageText.textContent = `The average starting price is `;
averageText.style.textAlign = "center";
averageText.style.fontSize = "large";
div.appendChild(averageText);

//adding available freelancer title
const freelanceTitle = document.createElement("h2");
freelanceTitle.textContent = "Available Freelancers";
freelanceTitle.style.textAlign = "center";
div.appendChild(freelanceTitle);
//freelancer array
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
