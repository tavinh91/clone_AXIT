var buttons = document.getElementsByClassName("tablinks");
var contents = document.getElementsByClassName("effect__tabcontent");
function showContent(id) {
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
    contents[i].classList.remove("active");
  }
  var content = document.getElementById(id);
  content.style.display = "flex";
  content.style.alignItems = "center";
  content.style.justifyContent = "center";
}
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var id = this.textContent;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    this.className += " active";
    showContent(id);
  });
}
showContent("TAB 1");