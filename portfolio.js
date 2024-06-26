function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const header = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    header.style.height = "70px";
    header.style.lineHeight = "70px";
  } else {
    header.style.boxShadow = "none";
    header.style.height = "90px";
    header.style.lineHeight = "90px";
  }
}
