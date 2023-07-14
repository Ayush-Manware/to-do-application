const addItemPopup = document.getElementById('$addNewItemBox');
const addItemPopupCloseButton = document.getElementById('$closeListButton');
const addCardContainer = document.getElementById('$createCard');

// popup close Button
function closeListButton(){
    // addItemPopupCloseButton.parentNode.style.display = 'none'
}

// Add Item Popup
function popupcard(){
    addItemPopup.classList.toggle("show");
}

function addCard(){
        addItemPopup.classList.toggle("hide");


   var addCard = document.createElement('div');
   var heading = document.createElement('h2');
   var items = document.createElement("div");
   var deleteButton = document.createElement('button');
   var addItem = document.createElement('button');


//    Append Child
addCardContainer.appendChild(addCard).setAttribute("class",'card');
addCard.appendChild(heading).setAttribute('class','cardHeading');
}