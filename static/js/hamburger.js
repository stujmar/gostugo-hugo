let coll = document.getElementsByClassName("hamburger");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = document.getElementById("menu-toggle");
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }
    if (content.style.maxHeight == "80px") {
        content.style.maxHeight = 0;
      } else {
        content.style.maxHeight = "80px";
      }
    });
}

console.log("js loaded");

