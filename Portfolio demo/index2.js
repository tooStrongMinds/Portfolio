// function scrollToSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   section.scrollIntoView({behavior: "smooth", block: "start"});
// }

function changeActiveClass(clickedLink) {
  const allLinks = document.querySelectorAll('.nav-link');
  allLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  clickedLink.classList.add('active')
}


