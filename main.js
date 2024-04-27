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
  if (window.scrollY > 200) { // التمرير إلى 50 بكسل
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});





// الوظيفة التي تفتح مربع الحوار وتعرض الصورة
function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

// الوظيفة التي تغلق مربع الحوار
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}