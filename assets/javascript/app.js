$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  $(".carouselSlick").slick({
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });
  if(window.innerHeight > window.innerWidth){
    //portrait
    console.log("hey im port");
    $(".pushdown").css("margin-top", "50vh")
    
}
if(window.innerWidth > window.innerHeight){
    //landscape
    console.log("hey im land");
    $(".pushdown").css("margin-top", "10vh")
}

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
  
  $('.sidenav').sidenav('close');
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
  $('.sidenav').sidenav('close');
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

function contact() {
  $('.sidenav').sidenav('close');
}
/////////////

$('body').on('mouseup', function() {
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
}, 200);
});

$('body').on('keyup', function() {
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
}, 100);
});
$('body').on('touchend', function() {
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
}, 200);
});

/* $('.sidenav-trigger').on('click', function() {
  if(window.innerHeight > window.innerWidth){
    //portrait
    console.log("hey im port");
    $(".pushdown").css("margin-top", "50vh")
    
}
if(window.innerWidth > window.innerHeight){
    //landscape
    console.log("hey im land");
    $(".pushdown").css("margin-top", "10vh")
}

}); */

$(window).on("orientationchange", function() {
  if(window.innerHeight > window.innerWidth){
    //portrait
    console.log("hey im port");
    $(".pushdown").css("margin-top", "10vh")
    
}
if(window.innerWidth > window.innerHeight){
    //landscape
    console.log("hey im land");
    $(".pushdown").css("margin-top", "50vh")
}
})


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