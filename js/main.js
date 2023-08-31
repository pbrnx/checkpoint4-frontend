document.addEventListener('DOMContentLoaded', function() {
    var imageUrls = [
       "../images/imagem-carroussel-1.jpg",
       "../images/imagem-carroussel-2.jpg",
       "../images/imagem-carroussel-3.jpg"
    ];
 
    var currentIndex = 0;
    var backgroundElement = document.querySelector('.background-image');
    var nextBackgroundElement = document.createElement('div');
    nextBackgroundElement.classList.add('background-image', 'next');
 
    function changeBackgroundImage() {
       currentIndex++;
       if (currentIndex >= imageUrls.length) {
          currentIndex = 0;
       }
 
       nextBackgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
       backgroundElement.parentNode.appendChild(nextBackgroundElement);
 
       setTimeout(function() {
          backgroundElement.classList.add('slide-out');
          nextBackgroundElement.classList.add('slide-in');
       });
 
       setTimeout(function() {
          backgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
          backgroundElement.classList.remove('slide-out');
          nextBackgroundElement.classList.remove('slide-in');
          backgroundElement.parentNode.removeChild(nextBackgroundElement);
       }, 1000);
    }
 
    setInterval(changeBackgroundImage, 3000);
 });

document.addEventListener("DOMContentLoaded", function () {
   const menuToggle = document.querySelector("#menu-toggle");
   const dropdownMenu = document.querySelector("#dropdown-menu");

   menuToggle.addEventListener("click", function () {
       if (dropdownMenu.style.display === "block") {
           dropdownMenu.style.display = "none";
       } else {
           dropdownMenu.style.display = "block";
       }
   });
});


 



