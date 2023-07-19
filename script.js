var popup = document.getElementById("popup");
function addItem() {
  popup.style.display = "block";

  // var blur = document.getElementById('$blurBackground');
  // blur.classList.remove('hide');
  // blur.classList.add('show');
}


// Add Card
function add() {
  // popup Display
  popup.style.display = "none";

//   Blur Background
// var blur = document.getElementById('$blurBackground');
// blur.classList.remove('show');
// blur.classList.add('hide');
  
//calling task card container for appending
  var cardContainer = document.getElementsByClassName("cardContainer")[0];


//   creating Card Body
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "cardBody");
  cardBody.setAttribute("id", "$cardBody");
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
cardInnerDiv.setAttribute('id', "$cardInnerDiv");
cardInnerDiv.innerText = " "
cardBody.appendChild(cardInnerDiv);

// card buttons div
var cardDuttonDiv = document.createElement('div')
cardDuttonDiv.setAttribute('class', 'cardDuttonDiv')
cardBody.appendChild(cardDuttonDiv);

// card delete button
var cardDeleteButton = document.createElement('button');
cardDeleteButton.innerHTML = 'Delete Card';
cardDeleteButton.setAttribute('class','cardDeleteButton');
cardDuttonDiv.appendChild(cardDeleteButton);


// Delete Card onclick
cardDeleteButton.addEventListener('click', function(){
    cardBody.setAttribute('class',"hide")
     // Blur Background
     var blur = document.getElementById('$blurBackground');
     blur.classList.remove('show');
     blur.classList.add('hide'); 
    
} )


// card add button
var cardAddButton = document.createElement('button');
cardAddButton.innerHTML = 'Add Item';
cardAddButton.setAttribute('class','cardAddButton');
cardDuttonDiv.appendChild(cardAddButton);

cardAddButton.addEventListener('click',function(){
  
    // Blur Background
    // var blur = document.getElementById('$blurBackground');
    // blur.classList.remove('hide');
    // blur.classList.add('show');  
    // blur.style.zIndex = '2'

    var popup2 = document.getElementById('$secondPopup');
    popup2.classList.add('show')
    popup2.classList.remove('hide')


    // // Calling Card Container
    // var cardContainer = document.getElementById('$cardContainer');


    // // popup 2 div
    // var popup2container = document.createElement('div')
    // popup2container.setAttribute('class','popup2container');
    // popup2container.setAttribute('id','$popup2container');
    // cardContainer.appendChild(popup2container);

    // // popup 2 title
    // var popup2Title = document.createElement('h5');
    // popup2Title.innerHTML = "Add New Item";
    // popup2Title.setAttribute('class','popup2Title')
    // popup2container.appendChild(popup2Title);


    // // popup 2 Input
    // var popup2Input = document.createElement('input');
    // popup2Input.setAttribute('class', 'popup2Input');
    // popup2Input.setAttribute('id', '$popup2Input');
    // popup2container.appendChild(popup2Input);


    // // Popup 2 Inner Button Div
    // var popup2ButtonDiv = document.createElement('div');
    // popup2ButtonDiv.setAttribute('class','popup2ButtonDiv')
    // popup2container.appendChild(popup2ButtonDiv);

    // // Popup 2 Add Button
    // var popup2AddButton = document.createElement('div');
    // popup2AddButton.innerHTML = 'Add';
    // popup2AddButton.setAttribute('class','popup2AddButton')
    // popup2ButtonDiv.appendChild(popup2AddButton)


    // // Popup 2 Delete Button
    // var popup2DeleteButton = document.createElement('div');
    // popup2DeleteButton.innerHTML = 'Close';
    // popup2DeleteButton.setAttribute('class','popup2DeleteButton')
    // popup2ButtonDiv.appendChild(popup2DeleteButton)
    

    // var popup2DeleteButton = document.getElementById('popup2DeleteButton');

        // popup2AddButton.addEventListener("click",()=>{
        // var innercardItemDiv = document.getElementById('$cardInnerDiv');
        //   var innerDivText = document.createElement('div');
        //   innerDivText.setAttribute('class','innerDivText');
        //   innerDivText.setAttribute('id','$innerDivText');
        //   innerDivText.innerHTML = document.getElementById('$popup2Input').value;
        //   innercardItemDiv.appendChild(innerDivText);
        // })


    // var popup2AddButton = document.createElement('div');
        // popup2AddButton.addEventListener("click",()=>{
        //   var innerDivItemList = document.createElement('p');
        //   innerDivItemList.setAttribute('class',"innerDivListItem")
        //   var innetDivText = document.getElementById('$popup2Input');
        //   innerDivItemList.innerText = innetDivText.value;
        //   popup2container.classList.add('hide')
        //   cardInnerDiv.appendChild(innerDivItemList)
        // })
    })

 
    
// })

}

function close(){
  var cardContainerOn2Popup = document.getElementById('$cardContainer');   
  cardContainerOn2Popup.classList.add('hide')
  cardContainerOn2Popup.classList.remove('show')
}

function popup2del(){
  var popup2DeleteButton = document.getElementById('$secondPopup');
  popup2DeleteButton.classList.add('hide');
  popup2DeleteButton.classList.remove('show');
  
      // Blur Background
      var blur = document.getElementById('$blurBackground');
      blur.classList.remove('hide');
      blur.classList.add('show');  
      blur.style.zIndex = '0'


}



function closeButton(){
      // popup Display hide
  popup.style.display = "none";


  //   Blur Background hide
  var blur = document.getElementById('$blurBackground');
  blur.classList.remove('show');
  blur.classList.add('hide');
}


// function hideCardBody(){

// }