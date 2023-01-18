// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementsByTagName("nav")[0];

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the solid class to the header when you reach its scroll position. Remove "solid" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
}
