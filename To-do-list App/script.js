const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
  if(inputBox.value === '') {
    alert("You must write something!");
  } else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); // adds input to the listContainer
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ''; //To empty input box after fn
  saveData();
}

listContainer.addEventListener("click", 
  function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // adds the checked class from style.css each time u click
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, 
false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
} // to save data in browser
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data"); // will get all the data called "data"
}
showTask();//activates each time i reopen the browser