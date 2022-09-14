/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");


const navLink = document.querySelectorAll(".nav__link")
function linkAct() {
  const navMenu =document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAct))

// *******************************************************************************navbar****

