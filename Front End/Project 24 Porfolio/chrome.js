// log out button clicked when the user clicks the save input button
let myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("inputBtn");
const ulEl = document.getElementById("ul-El");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //clear out the input field - clear input value
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems +=
      "<li><a target='_blank' href='" +
      myLeads[i] +
      "'>" +
      myLeads[i] +
      "</a></li>";
  }
  ulEl.innerHTML = listItems;
}

//buy button (other)
const container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
  container.innerHTML += "<p>Thank you for buying!";
}
