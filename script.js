var popup = document.getElementById("popup");
function addItem() {
  popup.style.display = "block";

  var blur = document.getElementById('$blurBackground');
  blur.classList.remove('hide');
  blur.classList.add('show');
}


// Add Card
function add() {
  // popup Display
  popup.style.display = "none";


//   Blur Background
var blur = document.getElementById('$blurBackground');
blur.classList.remove('show');
blur.classList.add('hide');
  
//calling task card container for appending
  var cardContainer = document.getElementsByClassName("cardContainer")[0];


//   creating Card Body
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "cardBody");
  cardContainer.appendChild(cardBody);

//   Fetching Input value
  let inputValue = document.getElementById("$input").value;

//   Setting Card Title Name
  var title = document.createElement("h5");
  title.innerText = inputValue;
  title.setAttribute("class", "cardTitle");
  cardBody.appendChild(title);


//   Setting card Inner Div
var cardInnerDiv = document.createElement('div');
cardInnerDiv.setAttribute('class', "cardInnerDiv");
cardInnerDiv.innerText = " "
cardBody.appendChild(cardInnerDiv);

// card buttons div
var cardDuttonDiv = document.createElement('div')
cardDuttonDiv.setAttribute('class', 'cardDuttonDiv')
cardBody.appendChild(cardDuttonDiv);

// card delete button
var cardDeleteButton = document.createElement('button');
cardDeleteButton.innerHTML = 'Delete';
cardDeleteButton.setAttribute('class','cardDeleteButton');
cardDuttonDiv.appendChild(cardDeleteButton);


// Delete Card onclick
cardDeleteButton.addEventListener('click', function(){
    cardBody.setAttribute('class',"hide")
} )


// card add button
var cardAddButton = document.createElement('button');
cardAddButton.innerHTML = 'Add';
cardAddButton.setAttribute('class','cardAddButton');
cardDuttonDiv.appendChild(cardAddButton);

cardAddButton.addEventListener('click',function(){
  
    // Blur Background
    var blur = document.getElementById('$blurBackground');
    blur.classList.remove('hide');
    blur.classList.add('show');  

    // Calling Card Container
    var cardContainer = document.getElementById('$cardContainer');


    // popup 2 div
    var popup2container = document.createElement('div')
    popup2container.setAttribute('class','popup2container');
    cardContainer.appendChild(popup2container);

    // popup 2 title
    var popup2Title = document.createElement('h5');
    popup2Title.innerHTML = "Add New Item";
    popup2Title.setAttribute('class','popup2Title')
    popup2container.appendChild(popup2Title);


    // popup 2 Input
    var popup2Input = document.createElement('input');
    popup2Input.setAttribute('class', 'popup2Input');
    popup2container.appendChild(popup2Input);


    // Popup 2 Inner Button Div
    var popup2ButtonDiv = document.createElement('div');
    popup2ButtonDiv.setAttribute('class','popup2ButtonDiv')
    popup2container.appendChild(popup2ButtonDiv);

    // Popup 2 Add Button
    var popup2AddButton = document.createElement('button');
    popup2AddButton.innerHTML = 'Add';
    popup2AddButton.setAttribute('class','popup2AddButton')
    popup2ButtonDiv.appendChild(popup2AddButton)


    // Popup 2 Delete Button
    var popup2DeleteButton = document.createElement('button');
    popup2DeleteButton.innerHTML = 'Close';
    popup2DeleteButton.setAttribute('class','popup2DeleteButton')
    popup2ButtonDiv.appendChild(popup2DeleteButton)
    
    popup2DeleteButton.addEventListener('click',function(){
        popup2container.setAttribute('class','hide')
        blur.setAttribute('class','hide')
    })
})

}


function closeButton(){
      // popup Display hide
  popup.style.display = "none";


  //   Blur Background hide
  var blur = document.getElementById('$blurBackground');
  blur.classList.remove('show');
  blur.classList.add('hide');
}


function hideCardBody(){

}