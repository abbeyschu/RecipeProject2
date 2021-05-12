var searchInput = document.getElementById("recipe-search-2");
var resultContentEl = document.querySelector('#result-content');
var columnDiv = document.querySelector('#card-append');

// create all html elements

function printResults(resultObj) {
    console.log(resultObj);
  
    // create html elements to hold results content
    var card = document.createElement('div');
    card.classList.add('card','column','is-one-quarter-desktop','is-one-third-tablet','is-one-fifth-widescreen','is-half-mobile');
    columnDiv.append(card);

    var cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    card.append(cardImage);

    var imageFigure = document.createElement('figure');
    imageFigure.classList.add('image', 'is-4by3');
    cardImage.append(imageFigure);

    var image = document.createElement('img');
    image.src = resultObj.strDrinkThumb
    imageFigure.append(image);

    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.append(cardContent);

    var media = document.createElement('div');
    media.classList.add('media');
    cardContent.append(media);

    var mediaContent = document.createElement('div');
    mediaContent.classList.add('media-content');
    media.append(mediaContent);
  
    var nameEl = document.createElement('p');
    nameEl.classList.add('title', 'is-4');
    nameEl.innerHTML = resultObj.strDrink;
    mediaContent.append(nameEl);
  
    var drinkTypeEl = document.createElement('p');
    drinkTypeEl.classList.add('subtitle', 'is-6');
    drinkTypeEl.innerHTML = resultObj.strAlcoholic;
    mediaContent.append(drinkTypeEl);
    if(resultObj.strAlcoholic === undefined) {
        drinkTypeEl.style.display = "none";
      }
  
    var linkButtonEl = document.createElement('button');
    linkButtonEl.textContent = 'See full recipe';
    linkButtonEl.classList.add('button', 'is-fullwidth');
    linkButtonEl.setAttribute('id','button'+ resultObj.idDrink);
    cardContent.append(linkButtonEl);

    printDesc(resultObj);
  }


// function to show all API Results
function searchApi() {
    // search by cocktail name
    var cocktailNameURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput.value

    // search by ingredient list
    var cocktailIngredientURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchInput.value
   
    columnDiv.textContent = "";

    fetch(cocktailNameURL)
    .then(response=>response.json())
    .then(data=> {
        console.log(data);
        for (var i = 0; i < data.drinks.length; i++) {
            printResults(data.drinks[i]);
            showModal(data.drinks[i]);
        }});

    fetch(cocktailIngredientURL)
    .then(response=>response.json())
    .then(data=>{
        for(var i = 0; i < data.drinks.length;i++){
            var ingredURLtwo = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + data.drinks[i].strDrink
            fetch(ingredURLtwo)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                printResults(data.drinks[0]);
                showModal(data.drinks[0]);
            })
        }
    });
}

// create html elements for modal
function printDesc(resultObj){
    var allModals = document.querySelector("#allModals");


    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute("id","page-modal"+ resultObj.idDrink);
    allModals.append(modal);

    var modalBackground =document.createElement('div');
    modalBackground.classList.add('modal-background');
    modalBackground.setAttribute('id','background'+resultObj.idDrink);
    modal.append(modalBackground);

    var modalCard = document.createElement('div');
    modalCard.classList.add('modal-card');
    modal.append(modalCard);

    var modalImage = document.createElement('p');
    modalImage.classList.add("image","is-3by2");
    modalCard.append(modalImage);

    var imageSrc = document.createElement('img');
    imageSrc.setAttribute('src',resultObj.strDrinkThumb);
    modalImage.append(imageSrc);


    var header = document.createElement('header');
    header.classList.add('modal-card-head');
    modalCard.append(header);

    var title = document.createElement('p');
    title.classList.add('modal-card-title','title', 'is-2');
    title.innerHTML = resultObj.strDrink;
    header.append(title);

    var closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.setAttribute('aria-label','close');
    closeButton.setAttribute('id','close'+ resultObj.idDrink);
    header.append(closeButton);

    var cardBody = document.createElement('section');
    cardBody.classList.add('modal-card-body');
    modalCard.append(cardBody);

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    cardBody.append(modalContent);

    var ingredientsTitle = document.createElement('h2');
    ingredientsTitle.classList.add('title', 'is-3');
    ingredientsTitle.innerHTML = "Ingredients";
    modalContent.append(ingredientsTitle);

    var listOne = document.createElement('li');
    listOne.innerHTML = resultObj.strMeasure1 + " " + resultObj.strIngredient1 ;
    ingredientsTitle.append(listOne);
    if(resultObj.strIngredient1 === undefined || resultObj.strIngredient1 === null) {
        listOne.style.display = "none";
    }
    if(resultObj.strMeasure1 === null){
        listOne.innerHTML = resultObj.strIngredient1;
    }

    var listTwo = document.createElement('li');
    listTwo.innerHTML = resultObj.strMeasure2 + " " + resultObj.strIngredient2 ;
    ingredientsTitle.append(listTwo);
    if(resultObj.strIngredient2 === undefined || resultObj.strIngredient2 === null) {
        listTwo.style.display = "none";
    }
    if(resultObj.strMeasure2 === null){
        listTwo.innerHTML = resultObj.strIngredient2;
    }

    var listThree = document.createElement('li');
    listThree.innerHTML = resultObj.strMeasure3 + " " + resultObj.strIngredient3 ;
    ingredientsTitle.append(listThree);
    if(resultObj.strIngredient3 === undefined || resultObj.strIngredient3 === null) {
        listThree.style.display = "none";
    }
    if(resultObj.strMeasure3 === null){
        listThree.innerHTML = resultObj.strIngredient3;
    }

    var listFour = document.createElement('li');
    listFour.innerHTML = resultObj.strMeasure4 + " " + resultObj.strIngredient4;
    ingredientsTitle.append(listFour);
    if(resultObj.strIngredient4 === undefined || resultObj.strIngredient4 === null) {
        listFour.style.display = "none";
    }
    if(resultObj.strMeasure4 === null){
        listFour.innerHTML = resultObj.strIngredient4;
    }

    var listFive = document.createElement('li');
    listFive.innerHTML = resultObj.strMeasure5 + " " + resultObj.strIngredient5;
    ingredientsTitle.append(listFive);
    if(resultObj.strIngredient5 === undefined || resultObj.strIngredient5 === null) {
          listFive.style.display = "none";
    }
    if(resultObj.strMeasure5 === null){
        listFive.innerHTML = resultObj.strIngredient5;
    }

    var listSix = document.createElement('li');
    listSix.innerHTML = resultObj.strMeasure6 + " " + resultObj.strIngredient6;
    ingredientsTitle.append(listSix);
    if(resultObj.strIngredient6 === undefined || resultObj.strIngredient6 === null) {
          listSix.style.display = "none";
    }
    if(resultObj.strMeasure6 === null){
        listSix.innerHTML = resultObj.strIngredient6;
    }

    var listSeven = document.createElement('li');
    listSeven.innerHTML = resultObj.strMeasure7 + " " + resultObj.strIngredient7;
    ingredientsTitle.append(listSeven);
    if(resultObj.strIngredient7 === undefined || resultObj.strIngredient7 === null) {
          listSeven.style.display = "none";
    }
    if(resultObj.strMeasure7 === null){
        listSeven.innerHTML = resultObj.strIngredient7;
    }

    var listEight = document.createElement('li');
    listEight.innerHTML = resultObj.strMeasure8 + " " + resultObj.strIngredient8;
    ingredientsTitle.append(listEight);
    if(resultObj.strIngredient8 === undefined || resultObj.strIngredient8 === null) {
          listEight.style.display = "none";
    }
    if(resultObj.strMeasure8 === null){
        listEight.innerHTML = resultObj.strIngredient8;
    }

    var listNine = document.createElement('li');
    listNine.innerHTML = resultObj.strMeasure9 + " " + resultObj.strIngredient9;
    ingredientsTitle.append(listNine);
    if(resultObj.strIngredient9 === undefined || resultObj.strIngredient9 === null) {
          listNine.style.display = "none";
    }
    if(resultObj.strMeasure9 === null){
        listNine.innerHTML = resultObj.strIngredient9;
    }

    var listTen = document.createElement('li');
    listTen.innerHTML = resultObj.strMeasure10 + " " + resultObj.strIngredient10;
    ingredientsTitle.append(listTen);
    if(resultObj.strIngredient10 === undefined || resultObj.strIngredient10 === null) {
          listTen.style.display = "none";
    }
    if(resultObj.strMeasure10 === null){
        listTen.innerHTML = resultObj.strIngredient10;
    }

    var listEleven = document.createElement('li');
    listEleven.innerHTML = resultObj.strMeasure11 + " " + resultObj.strIngredient11;
    ingredientsTitle.append(listEleven);
    if(resultObj.strIngredient11 === undefined || resultObj.strIngredient11 === null) {
          listEleven.style.display = "none";
    }
    if(resultObj.strMeasure11 === null){
        listEleven.innerHTML = resultObj.strIngredient11;
    }

    var listTwelve = document.createElement('li');
    listTwelve.innerHTML = resultObj.strMeasure12 + " " + resultObj.strIngredient12;
    ingredientsTitle.append(listTwelve);
    if(resultObj.strIngredient12 === undefined ||resultObj.strIngredient12 === null) {
          listTwelve.style.display = "none";
    }
    if(resultObj.strMeasure12 === null){
        listTwelve.innerHTML = resultObj.strIngredient12;
    }

    var listThirteen = document.createElement('li');
    listThirteen.innerHTML = resultObj.strMeasure13 + " " + resultObj.strIngredient13;
    ingredientsTitle.append(listThirteen);
    if(resultObj.strIngredient13 === undefined || resultObj.strIngredient13 === null) {
          listThirteen.style.display = "none";
    }
    if(resultObj.strMeasure13 === null){
        listThirteen.innerHTML = resultObj.strIngredient13;
    }

    var listFourteen = document.createElement('li');
    listFourteen.innerHTML = resultObj.strMeasure14 + " " + resultObj.strIngredient14;
    ingredientsTitle.append(listFourteen);
    if(resultObj.strIngredient14 === undefined || resultObj.strIngredient14 === null) {
          listFourteen.style.display = "none";
    }
    if(resultObj.strMeasure14 === null){
        listFourteen.innerHTML = resultObj.strIngredient14;
    }

    var listFifteen = document.createElement('li');
    listFifteen.innerHTML = resultObj.strMeasure15 + " " + resultObj.strIngredient15;
    ingredientsTitle.append(listFifteen);
    if(resultObj.strIngredient15 === undefined || resultObj.strIngredient15 === null) {
          listFifteen.style.display = "none";
    }
    if(resultObj.strMeasure15 === null){
        listFifteen.innerHTML = resultObj.strIngredient15;
    }

    var instructionHeader = document.createElement('h2');
    instructionHeader.classList.add('title','is-3');
    instructionHeader.innerHTML = "Instructions"
    modalContent.append(instructionHeader);

    var instructions = document.createElement('p');
    instructions.innerHTML = resultObj.strInstructions;
    instructionHeader.append(instructions);

}

// see full recipe button and modal, and then close it
function showModal(resultObj){

var button = document.getElementById('button'+resultObj.idDrink);
var modal = document.getElementById('page-modal'+resultObj.idDrink);
var closeModal = document.getElementById('close'+ resultObj.idDrink);
var background = document.getElementById('background'+resultObj.idDrink);

button.onclick = function(){
    modal.style.display = 'block'   
};

closeModal.onclick = function(){
    modal.style.display = 'none'
};

background.onclick = function(){
    modal.style.display = 'none'
}};