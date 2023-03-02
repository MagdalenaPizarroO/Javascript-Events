window.onload = function loadFn() {
    var containerElm = document.getElementById("container");
    containerElm.addEventListener("click", function (event) {
        // Determine which element was clicked
        var targetElm = event.target;

        // Perform the appropriate action based on the element type
        if (targetElm.id === "btn1") {
            alert("Button clicked");
        } else if (targetElm.id === "anchor1") {
            event.preventDefault(); // Prevent default link behavior
            alert("Anchor clicked");
        } else if (targetElm.id === "img1") {
            targetElm.src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"; // Change the image source
        }
    });
};