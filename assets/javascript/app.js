var technology = [];
var solved = [];

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
    $("#title-link").attr( "href", $(".link"+$('.slick-current').attr("data-slick-index")).attr("href"));
    $("#technology").html(technology[$('.slick-current').attr("data-slick-index")]);
    $("#solved").html(solved[$('.slick-current').attr("data-slick-index")]);
}, 200);
});

$('body').on('keyup', function() {
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
    $("#title-link").attr( "href", $(".link"+$('.slick-current').attr("data-slick-index")).attr("href"));
    $("#technology").html(technology[$('.slick-current').attr("data-slick-index")]);
    $("#solved").html(solved[$('.slick-current').attr("data-slick-index")]);
}, 100);
});
$('body').on('touchend', function() {
  setTimeout(function() { 
    $("#title").html($(".img"+$('.slick-current').attr("data-slick-index")).attr("data-slide"));
    $("#title-link").attr( "href", $(".link"+$('.slick-current').attr("data-slick-index")).attr("href"));
    $("#technology").html(technology[$('.slick-current').attr("data-slick-index")]);
    $("#solved").html(solved[$('.slick-current').attr("data-slick-index")]);
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

//technology text
//0
technology[0] = "";
//1
technology[1] = "";
//2
technology[2] = "";
//3
technology[3] = "Technology highlights: FireBase, jQuery, Bootstrap";
//4
technology[4] = "";
//5
technology[5] = "Technology highlights: Express, Node.js, MySQL";
//6
technology[6] = "";
//7
technology[7] = "";
//8
technology[8] = "";
//9
technology[9] = "";
//10
technology[10] = "Technology Highlights: JawsDB, Heroku, Handlebars";
//11
technology[11] = "Technology Highlights: Slick.JS, REST, Materialize";


//solved text
//0
solved[0] = "";
//1
solved[1] = "";
//2
solved[2] = "";
//3
solved[3] = "Play RPS online with the ability to chat and spectate.";
//4
solved[4] = "";
//5
solved[5] = "Find friends with closest degree of matching survey answers.";
//6
solved[6] = "";
//7
solved[7] = "";
//8
solved[8] = "";
//9
solved[9] = "";
//10
solved[10] = "Web app to order burgers, reorder, or remove them.";
//11
solved[11] = "Aggregation of video game media while keeping a clean UX.";
