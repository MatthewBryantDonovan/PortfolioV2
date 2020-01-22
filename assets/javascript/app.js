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

// //original
// function portfolio() {
//   $("#bio").css("display", "none");
//   $(".slick-prev").click();
//   $(".carouselSlick").css("display", "inherit");
//   $("#title").css("display", "inherit");
// }
// //original
// function bio() {
//   $("#bio").css("display", "inherit");
//   $(".carouselSlick").css("display", "none");
//   $("#title").css("display", "none");
// }

//////////////////////
//new
function portfolio() {
  $("#bio").css({
    position: "absolute",
    top: "-99999999px",
    left: "-9999999999999px"
  });
  $(".slick-prev").click();
$(".carouselSlick").css({
  position: "inherit",
  top: "inherit",
  left: "inherit"
});
$("#title").css({
  position: "initial",
  top: "inherit",
  left: "inherit"
});
$(".slick-slider").css({
  position: "sticky"
});
$(".slick-dots").css({
  position: "initial"
});
}
//new
function bio() {
  $("#bio").css({
    position: "initial",
    top: "inherit",
    left: "inherit"
  });
  $(".carouselSlick").css({
    position: "absolute",
    top: "-99999999px",
    left: "-9999999999999px"
  });
  $("#title").css({
    position: "absolute",
    top: "-99999999px",
    left: "-9999999999999px"
  });
}

/////////////

function CloseSidebar(){
  $(".sidenav").sidenav('onCloseStart', instance.close());
}

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


///////// trying to get the slick to load faster
$(".carouselSlick").css({
  position: "absolute",
  top: "-99999999px",
  left: "-9999999999999px"
});
$("#title").css({
  position: "absolute",
  top: "-99999999px",
  left: "-9999999999999px"
});