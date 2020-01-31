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
$("#technology").css({
  position: "initial",
  top: "inherit",
  left: "inherit"
});
$("#solved").css({
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
  $("#technology").html("");
  $("#solved").html("");
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
  $("#technology").css({
    position: "absolute",
    top: "-99999999px",
    left: "-9999999999999px"
  });
  $("#solved").css({
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
$("#technology").css({
  position: "absolute",
  top: "-99999999px",
  left: "-9999999999999px"
});
$("#solved").css({
  position: "absolute",
  top: "-99999999px",
  left: "-9999999999999px"
});

//technology text
//0 - giphyMatt
technology[0] = "Technology highlights: AJAX, User Favorites, Bootstrap";
//1 - Castlevania: Halls of Supremacy
technology[1] = "Technology highlights: Click Events, jQuery, Bootstrap";
//2 - John Wick Trivia
technology[2] = "Technology highlights: Timers, Click Events, Object Methods";
//3 - Rock Paper Scissors Online
technology[3] = "Technology highlights: FireBase, jQuery, Bootstrap";
//4 - Metal Gear Hangman
technology[4] = "Technology highlights: Responsive Design, Click Events, JavaScript";
//5 - Friend Finder
technology[5] = "Technology highlights: Express, Node.js, MySQL";
//6 - Liri Bot
technology[6] = "Technology highlights: Axios, Node.js, CLI";
//7 - Word Guess CLI
technology[7] = "Technology highlights: Constructors, Node.js, CLI";
//8 - Bamazon CLI
technology[8] = "Technology highlights: MySQL, Node.js, CLI";
//9 - Stardate API
technology[9] = "Technology highlights: Restify, API, Moment.JS";
//10 - Bob's Burgers!
technology[10] = "Technology Highlights: JawsDB, Heroku, Handlebars";
//11 - Videogame Hypeman
technology[11] = "Technology Highlights: Slick.JS, REST, Materialize";


//solved text
//0 - giphyMatt
solved[0] = "Find gifs of your favorite animals.";
//1 - Castlevania: Halls of Supremacy
solved[1] = "Play a browser based Role Playing Game with multiple paths to victory.";
//2 - John Wick Trivia
solved[2] = "Guess John Wick movie based questions correctly in this timed trivia game.";
//3 - Rock Paper Scissors Online
solved[3] = "Play RPS online with the ability to chat and spectate.";
//4 - Metal Gear Hangman
solved[4] = "Browser based hangman game with great audio.";
//5 - Friend Finder
solved[5] = "Find friends with closest degree of matching survey answers.";
//6 - Liri Bot
solved[6] = "This bot will will take commands to show concert, song, and move data.";
//7 - Word Guess CLI
solved[7] = "Play a hangman game with a Command Line interface.";
//8 - Bamazon CLI
solved[8] = "Command Line interface that allows customers to buy items from a MySQL database.";
//9 - Stardate API
solved[9] = "Convert dates into Star Trek stardates or Star Trek stardates into dates.";
//10 - Bob's Burgers!
solved[10] = "Web app to order burgers, reorder, or remove them.";
//11 - Videogame Hypeman
solved[11] = "Aggregation of video game media while keeping a clean UX.";
