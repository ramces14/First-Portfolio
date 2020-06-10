function responsiveNavbar() {
  const nav = document.getElementById("navbar");
  if (nav.className === "navbar-div") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar-div";
  }
}
