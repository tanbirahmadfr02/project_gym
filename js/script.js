$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  });
//   =======banner part end =========
//   =======about part start =========
new VenoBox({
    selector: ".venobox"
});
//   =======about part end =========
// ======testimonial part start =====
$('.slider_item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ======testimonial part end =====
// =======counter up part start ===========
$('.counter').counterUp();
// =======counter up part end ===========
// =========logo slider part start =========
$('.logo_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-chevron-left prevarrow"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'50px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'50px',
      }
    }
  ]
});
// =========logo slider part end =========
// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
main_menu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========
// ========back to top part ======
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
    $(".back_to_top").addClass("bottom_to_top")
  }else{
    $(".back_to_top").removeClass("bottom_to_top")
  }
});
// ========back to top part ======