const searchButton = document.querySelector('#search-2');

// activate search button and determine which api function to run
searchButton.addEventListener("click", function(event){
    if(document.getElementById("drinkCheck").checked){
        event.preventDefault();
        searchApi();
    } else if (document.getElementById("foodCheck").checked){
        event.preventDefault();
        findApi(searchInput);
        }
    });




// This function appends the list of previous foods searched
function foodList() {
  let listItem = $("<li>").addClass("list-item").text(searchButton);
  $(".list").append(listItem);
}