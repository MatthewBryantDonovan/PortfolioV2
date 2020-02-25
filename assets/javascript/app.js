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
  $('.carouselSlick').slick("getSlick").refresh();
  // $(".slick-prev").click(); old method workaround above
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
technology[13] = "Technology highlights: AJAX, User Favorites, Bootstrap";
//1 - Castlevania: Halls of Supremacy
technology[12] = "Technology highlights: Click Events, jQuery, Bootstrap";
//2 - John Wick Trivia
technology[11] = "Technology highlights: Timers, Click Events, Object Methods";
//3 - Rock Paper Scissors Online
technology[10] = "Technology highlights: FireBase, jQuery, Bootstrap";
//4 - Metal Gear Hangman
technology[9] = "Technology highlights: Responsive Design, Click Events, JavaScript";
//5 - Friend Finder
technology[8] = "Technology highlights: Express, Node.js, MySQL";
//6 - Liri Bot
technology[7] = "Technology highlights: Axios, Node.js, CLI";
//7 - Word Guess CLI
technology[6] = "Technology highlights: Constructors, Node.js, CLI";
//8 - Bamazon CLI
technology[5] = "Technology highlights: MySQL, Node.js, CLI";
//9 - Stardate API
technology[4] = "Technology highlights: Restify, API, Moment.JS";
//10 - Bob's Burgers!
technology[3] = "Technology Highlights: JawsDB, Heroku, Handlebars";
//11 - Up Game News!
technology[2] = "Technology Highlights: mongoose, mongoDB, cheerio";
//12 - Super Clicky Bros
technology[1] = "Technology Highlights: React.JS, Materialize, React Components";
//13 - Videogame Hypeman
technology[0] = "Technology Highlights: Vue.JS, Slick.JS, Materialize";


//solved text
//0 - giphyMatt
solved[13] = "Find gifs of your favorite animals.";
//1 - Castlevania: Halls of Supremacy
solved[12] = "Play a browser based Role Playing Game with multiple paths to victory.";
//2 - John Wick Trivia
solved[11] = "Guess John Wick movie based questions correctly in this timed trivia game.";
//3 - Rock Paper Scissors Online
solved[10] = "Play RPS online with the ability to chat and spectate.";
//4 - Metal Gear Hangman
solved[9] = "Browser based hangman game with great audio.";
//5 - Friend Finder
solved[8] = "Find friends with closest degree of matching survey answers.";
//6 - Liri Bot
solved[7] = "This bot will will take commands to show concert, song, and move data.";
//7 - Word Guess CLI
solved[6] = "Play a hangman game with a Command Line interface.";
//8 - Bamazon CLI
solved[5] = "Command Line interface that allows customers to buy items from a MySQL database.";
//9 - Stardate API
solved[4] = "Convert dates into Star Trek stardates or Star Trek stardates into dates.";
//10 - Bob's Burgers!
solved[3] = "Web app to order burgers, reorder, or remove them.";
//12 - Up Game News!
solved[2] = "Get freshly scraped GameSpot news for games, movies, and more!";
//12 - Super Clicky Bros
solved[1] = "Memory game in which you click every character once, if you click them twice the game resets.";
//13 - Videogame Hypeman
solved[0] = "Aggregation of video game media while keeping a clean UX.";
