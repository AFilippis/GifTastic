$(document).ready(function () {
    var topics = ["kittens", "otters", "dogs", "bunnies"];
    var numberOfGifs = 10;
    var maxRating = "PG";

    // Render button function.
    function renderBtns() {
        $('#btnContainer').empty();
        //Create buttons based on elements in array
        for (var i = 0; i < topics.length; i++) {
            var newBtn = $('<button>');
            newBtn.attr('data-name', topics[i]);
            newBtn.addClass('gif');
            newBtn.addClass('topicBtn')
            newBtn.addClass('btn');
            newBtn.text(topics[i]);
            $('#btnContainer').append(newBtn);
        };
        $(".topicBtn").unbind("click");
        $(".topicBtn").on("click", function () {
            $(".gifImage").unbind("click");
            $("#gifContainer").empty();

            populateGIFContainer($(this).text());
        });
    };

    function addBtn() {
        var input = $('#randomInput').val().trim();
        topics.push(input);
        renderBtns();
    };

    $('#submitBtn').click(function (event) {
        event.preventDefault();
        addBtn();
        console.log("added");
    });

    
    function addGifsToContainer() {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + show +
                "&api_key=Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp&rating=" + maxRating + "&limit=" + numberOfGifs,
            method: "GET"
        }).then(function (response) {
            response.data.forEach(function (element) {
                newDiv = $("<div>");
                newDiv.addClass("singularGifContainer");
                newDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
                var newImage = $("<img src = '" + element.images.url + "'>");
                newImage.addClass("gifImage");
                newDiv.append(newImage);
                $("#gifContainer").append(newDiv);
            });
        });
    };


    // Append input into btnContainer
    // By submit button or hitting enter
    // Call function to Gify API.
    // Limit gifs called
    // Display Gifs in gifContainer.

    renderBtns();

});

// Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp