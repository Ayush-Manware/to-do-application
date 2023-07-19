var popup2 = document.getElementById('$secondPopup');

// add Item Button
function addItemButton() {
  var blur = document.getElementById("$blurBackground");
  blur.classList.remove("hide");

  var popup1 = document.getElementById("popup");
  popup1.classList.remove("hide");
  popup1.classList.add("show");
}

function newTaskAdd() {
  var blur = document.getElementById("$blurBackground");
  blur.classList.add("hide");

  var popup1 = document.getElementById("popup");
  popup1.classList.remove("show");
  popup1.classList.add("hide");

  var cardContainer = document.getElementById("$cardContainer");
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "cardBody");
  cardContainer.appendChild(cardBody);

  var cardHeading = document.getElementById("$input").value;

  if(cardHeading === "" || cardHeading === " "){
    alert('Please Enter Task');
    cardBody.classList.add('hide')
  }

  var cardTitle = document.createElement("h2");
  cardTitle.setAttribute("class", "cardTitle");
  cardTitle.innerHTML = cardHeading;
  cardBody.appendChild(cardTitle);

  var innerDiv = document.createElement("ul");
  innerDiv.setAttribute("class", "cardInnerDiv");
  cardBody.appendChild(innerDiv);

  var cardButtonDiv = document.createElement("div");
  cardButtonDiv.setAttribute("class", "cardDuttonDiv");
  cardBody.appendChild(cardButtonDiv);

  var cardDeleteButton = document.createElement("div");
  cardDeleteButton.setAttribute("class", "cardDeleteButton");
  cardDeleteButton.setAttribute("id", "$cardDeleteButton");
  cardDeleteButton.innerText = "Delete Task";
  cardButtonDiv.appendChild(cardDeleteButton);

  cardDeleteButton.addEventListener("click",()=>{
    cardDeleteButton.parentNode.parentNode.setAttribute('class',"hide")
  })

  var cardAddButton = document.createElement("div");
  cardAddButton.setAttribute("class", "cardAddButton");
  cardAddButton.setAttribute("id", "$cardAddButton");
  cardAddButton.innerText = "Add Item";
  cardButtonDiv.appendChild(cardAddButton);

  cardAddButton.addEventListener('click',()=>{
    popup2.classList.add("show")
    popup2.classList.remove("hide")
    cardContainer.classList.add('hide')
    cardContainer.classList.remove('show')
    blur.style.zIndex = "5"

    // var input2 = document.getElementById('popup2Input').value ;

  
  })
}

function popup2del(){

}

function popup2add(){

}





function newTaskClose() {
  var blur = document.getElementById("$blurBackground");
  blur.classList.add("hide");

  var popup1 = document.getElementById("popup");
  popup1.classList.remove("show");
  popup1.classList.add("hide");
}
