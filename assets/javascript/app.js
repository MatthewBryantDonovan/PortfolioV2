$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  $(".carouselSlick").slick({
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });

});
$(".slick-arrow").attr("id", "slickID");

function portfolio() {
  $("#bio").css("display", "none");
  $(".slick-prev").click();
  $(".carouselSlick").css("display", "inherit");
  $("#title").css("display", "inherit");
};

function bio() {
  $("#bio").css("display", "inherit");
  $(".carouselSlick").css("display", "none");
  $("#title").css("display", "none");
};

$('body').on('mouseup', function() {
  console.log( $('.slick-current').attr("data-slick-index") );
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
}, 200);
});

$('body').on('keyup', function() {
  console.log( $('.slick-current').attr("data-slick-index") );
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
}, 100);
});
$('body').on('touchend', function() {
  console.log( $('.slick-current').attr("data-slick-index") );
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
}, 200);
});