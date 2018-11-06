
var topics = ["kitten", "otter", "dog", "bunny" , "moose", "mouse", "alien"];
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

        addGifsToContainer($(this).text());
    });
};

function addBtn(show) {
    if (topics.indexOf(show) === -1) {
        topics.push(show);
        $("#btnContainer").empty();
        renderBtns();
    }
}



function addGifsToContainer(show) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + show +
            "&api_key=Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp&rating=" + maxRating + "&limit=" + numberOfGifs,
        method: "GET"
    }).then(function (response) {
        console.log(response + " data recieved")

        response.data.forEach(function (element) {
            newDiv = $("<div>");
            newDiv.addClass("smallGifContainer");
            newDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
            var newImage = $("<img src = '" + element.images.fixed_height_still.url + "'>");
            newImage.addClass("gifImage");
            newImage.attr("state", "still");
            newImage.attr("still-data", element.images.fixed_height_still.url);
            newImage.attr("animated-data", element.images.fixed_height.url);
            newDiv.append(newImage);
            $("#gifContainer").append(newDiv);
        });

        $(".gifImage").unbind("click");
        $(".gifImage").on("click", function () {
            if ($(this).attr("state") === "still") {
                $(this).attr("state", "animated");
                $(this).attr("src", $(this).attr("animated-data"));
            }
            else {
                $(this).attr("state", "still");
                $(this).attr("src", $(this).attr("still-data"));
            }
        });
    });
};


// Append input into btnContainer
// By submit button or hitting enter
// Call function to Gify API.
// Limit gifs called
// Display Gifs in gifContainer.

$(document).ready(function () {
    renderBtns();
    $("#submitBtn").on("click", function () {
        event.preventDefault();
        var input = $("#randomInput").val().trim();
        addBtn($("#randomInput").val().trim());
        $("#randomInput").val("");

        console.log(input + " entered and added");
    });
});

// Yzx8vjOJIoMqPNi0M0sKl3K8hbapqLEp