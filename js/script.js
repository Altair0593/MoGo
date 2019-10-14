
//accordion js for section services 2
var acc = document.getElementsByClassName("accordion_header_btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var accordion_content = this.nextElementSibling;
    if (accordion_content.style.display === "block") {
        accordion_content.style.display = "none";
    } else {
        accordion_content.style.display = "block";
    }
  });
}

//modal window for map

let modal = document.getElementById("mapModal");
let btn = document.getElementById("mapBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//fixed navbar

$(function(){ 
  var introH = $("#intros").innerHeight(),
  header = $("#headers"),
  scrollOffset = $(window).scrollTop();
  
  checkScroll(scrollOffset);

  $(window).on("scroll", function(){
     scrollOffset = $(this).scrollTop();
     
     checkScroll(scrollOffset);
     
  })


function checkScroll(scrollOffset){
    if(scrollOffset >= introH) {
      header.addClass("header--fixed");
    }else {
      header.removeClass("header--fixed");
    }
  } 

  //Smooth scroll

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active__link");
      $this.addClass("active__link");


      $("html, body").animate({
        scrollTop: blockOffset
      }, 500)
   

  });


//nav--taggle burger
  $("#nav-togle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("activate");
    $("#nav").toggleClass("activate");

  })

//Slider
  $("[data-slider]").slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.single-item').slick();

});




