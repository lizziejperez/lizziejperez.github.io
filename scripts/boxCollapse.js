// Collapse Box Content Feature
var coll = document.getElementsByClassName("coll-btn");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var cont = this.nextElementSibling;
        if (cont.style.display === "none" || cont.style.display === "") {
            cont.style.display = "block";
        } else {
            cont.style.display = "none";
        }
    });
}