//My script wouldn't run if only loaded from app.js. I had to leave it in the html for it to work.


  // Initial array of characters from The Simpsons
  var simpsons = ["Homer", "Marge", "Flanders", "Chief Wiggum"];

  // Function for displaying movie data
  function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#simpsons-view").empty();

    // Looping through the array of characters
    for (var i = 0; i < simpsons.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("simpsonsCharacters");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", simpsons[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(simpsons[i]);
      // Adding the button to the HTML
      $("#simpsons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-character").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var newCharacter = $("#movie-input").val().trim();
    // The movie from the textbox is then added to our array
    simpsons.push(newCharacter);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();

$(".simpsonsCharacters").on("click", function() {



// Storing our giphy API URL for a random cat image

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=homer%20simpson&limit=10&rating=g";



// Perfoming an AJAX GET request to our queryURL

$.ajax({

url: queryURL,

method: "GET"

})

// After the data from the AJAX request comes back

.then(function(response) {

  console.log (response);

// Saving the image_original_url property

for (i = 0; i < 10; i++) {

  var imageUrl = response.data[i].images.original.url;


// Creating and storing an image tag

var simpsonImage = $("<img>");

// Setting the simpsonImage src attribute to imageUrl

simpsonImage.attr("src", imageUrl);

simpsonImage.attr("alt", "a cool image from The Simpsons");



// Prepending the simpsonImage to the images div

$("#simpsons-view").prepend(simpsonImage);         

}
});

});

