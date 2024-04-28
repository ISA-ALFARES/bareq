const menus = document.getElementById("menu");
const action = document.getElementById("actions");

menus.addEventListener("click", () => {
  hundlmanu();
});
function hundlmanu(){
menus.classList.toggle("is-active");
action.classList.toggle("is-active")
}


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('header');
  if (window.scrollY > 200) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




  function filterWorks(category, link) {
    var links = document.querySelectorAll('.links a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });

    link.classList.add('active');

    var cards = document.querySelectorAll('.box img');
    cards.forEach(function(card) {
      var categoryClass = card.getAttribute('data-category');
      if (category === 'all' || category === categoryClass) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }