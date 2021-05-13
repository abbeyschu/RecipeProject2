const searchRecipe = document.querySelector('#card-append');
const result = document.querySelector('#result-content');
const apiKey = '9b2b77378f38c14b074813a97058067c';
const appId = '61905fa6';
const url = `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apiKey}&from=0&to=20`;
var searchInput = '';



function findApi(searchInput) {

  searchInput = document.querySelector('#recipe-search-2').value;

  fetch(
    `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apiKey}&from=0&to=20`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //a function to pass the hits inside the data
      generateCards(data.hits)
    });
}

// function to display recipe (img, title and calories)
function generateCards(results) {

  var resultsDiv = document.querySelector('#card-append')
  resultsDiv.textContent = "";

  let generatedCards= '';
  //every time we are looping through the results, create a card using the format in the HTML
  results.map(result => {
    console.log(result)
    generatedCards +=
      `
<div class="card column is-one-quarter">
      <div class="card-image">
        <figure class="image is-4by3">
        
          <img src= "${result.recipe.image}" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <p class="title is-4">${result.recipe.label}</p>
          </div>
        </div>
    
        <div class="calories">
        <strong> Cuisine Type: </strong>${result.recipe.cuisineType}
        <br>
         <strong> Calories: </strong>${result.recipe.calories.toFixed(0)}
         <br>
        
         <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a> 
        </div>
      </div>
    </div>
`
})
searchRecipe.innerHTML = generatedCards;
};