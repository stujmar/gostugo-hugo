var coll = document.getElementsByClassName("hamburger");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // var content = this.nextElementSibling;
    let content = document.getElementById("toggle-menu");
    console.log("click");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

console.log("js loaded");