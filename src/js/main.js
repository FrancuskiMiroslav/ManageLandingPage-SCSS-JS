$(document).ready(function() {
  console.log("main.js file loaded");
});

window.onload = function() {
  document.addEventListener(
    "click",
    function(event) {
      if (!event.target.matches("#click-me")) return;
      alert("You clicked me!");
    },
    false
  );
};
