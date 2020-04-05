/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function() {
  console.log("main.js file loaded");
}));

window.onload = function() {
  document.addEventListener(
    "click",
    (function(event) {
      if (!event.target.matches("#click-me")) return;
      alert("You clicked me!");
    }),
    false
  );
};
