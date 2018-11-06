$(document).ready(function () {
    var topics = ["kittens", "otters", "dogs", "bunnies"];
    var numberOfGifs = 10;
    var maxRating = "PG";

    // Render button function.
    var createBtn = function () {
        $('#btnContainer').empty();
        //Create buttons based on elements in array
        for (var i = 0; i < topics.length; i++) {
            var newBtn = $('<button>');
            newBtn.attr('data-name', topics[i]);
            newBtn.attr('class', 'gif');
            newBtn.text(topics[i]);
            $('#btnContainer').append(newBtn);
        };
    };

    // Append input into btnContainer
        // By submit button or hitting enter
    // Call function to Gify API.
        // Limit gifs called
    // Display Gifs in gifContainer.
});