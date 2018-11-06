$(document).ready(function () {
    var topics = ["kittens", "otters", "dogs", "bunnies"];
    var numberOfGifs = 10;
    var maxRating = "PG";

    // Render button function.
    function renderBtn() {
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

    function addBtn() {
        var input = $('#randomInput').val().trim();
        topics.push(input);
        renderBtn();
    };

    $('#submitBtn').click(function (event) {
        event.preventDefault();
        addBtn();
        console.log("added");
    });

    function addGifsToContainer() {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + show +
                "&api_key=Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp&rating=" + cutOffRating + "&limit=" + numberOfGifs,
            method: "GET"
        }).then(function (response) {
            response.data.forEach(function (element) {
                $(document).ready(function () {
                    var topics = ["kittens", "otters", "dogs", "bunnies"];
                    var numberOfGifs = 10;
                    var maxRating = "PG";
                
                    // Render button function.
                    function renderBtn() {
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
                
                    function addBtn() {
                        var input = $('#randomInput').val().trim();
                        topics.push(input);
                        renderBtn();
                    };
                
                    $('#submitBtn').click(function (event) {
                        event.preventDefault();
                        addBtn();
                        console.log("added");
                    });
                
                    function addGifsToContainer() {
                        $.ajax({
                            url: "https://api.giphy.com/v1/gifs/search?q=" + show +
                                "&api_key=Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp&rating=" + cutOffRating + "&limit=" + numberOfGifs,
                            method: "GET"
                        }).then(function (response) {
                            response.data.forEach(function (element) {
                                newDiv = $("<div>");
                                newDiv.addClass("individual-gif-container");
                                newDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
                                var newImage = $("<img src = '" + element.images.url + "'>");
                                newImage.addClass("gif-image");
                                newDiv.append(newImage);
                                $("#gif-container").append(newDiv);
                            });
                        });
                    };
                
                    // Append input into btnContainer
                    // By submit button or hitting enter
                    // Call function to Gify API.
                    // Limit gifs called
                    // Display Gifs in gifContainer.
                
                    renderBtn();
                    addGifsToContainer();
                });
                
                // Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp
            });
        });
    };

    // Append input into btnContainer
    // By submit button or hitting enter
    // Call function to Gify API.
    // Limit gifs called
    // Display Gifs in gifContainer.

    renderBtn();

});

// Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp