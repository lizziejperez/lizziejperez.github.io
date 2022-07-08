// Collapse Box Content Feature
var coll = document.getElementsByClassName("coll-btn");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var cont = this.nextElementSibling;
        var img = this.getElementsByTagName('img')[0];
        if (cont.style.display === "none" || cont.style.display === "") {
            cont.style.display = "block";
            img.src = "images/icons/angle-small-up.png";
        } else {
            cont.style.display = "none";
            img.src = "images/icons/angle-small-down.png";
        }
    });
}