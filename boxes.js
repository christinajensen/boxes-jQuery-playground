$(document).ready(function() {
  // // 1.
  // alert("ready for DOM manipulation");

  // // 2.1
  // $("#secretBox").css("background-color", "white").wrapInner("<h1></h1>");
  // $("h1").text("secret box!");

  // // 2.2
  // $("#row1").children().addClass("boxType3");

  // // 2.3
  // $("#row4").children(".boxType1").last().css("display", "none");

  // // 2.4
  // $("#row2 div:nth-child(3)").css("background-color", "white");
  // $("#row4 div:nth-child(1)").css("background-color", "white");

  // // 2.5
  // $("#row2 div:nth-child(1)").removeAttr("style").removeClass("box boxType2");
  // $("#row2 div:nth-child(2)").removeAttr("style").removeClass("box boxType3");

  // a more DRY way of doing it
  // $("#row2 > div:lt(2)").removeAttr("style").removeClass();

  // // 2.6
  // $("#container div:not(.row, #secretBox)").css("width", "2px");

  // 3.1
  $("#container").on('click', function(e) {
    console.log(e.pageX + " , " + e.pageY);
  });

  // 3.2
  $(".boxType1").wrapInner("<a href='http://www.galvanize.com/'>Galvanize</a>");
  $("a").on('click', function(e) {
    e.preventDefault();
    alert("You can never leave this page!");
  });

  // 3.3
  $(".box").on('click', function(e) {
    $(this).toggleClass("puppy");
  });

  // 3.4
  $("#container").on('click', function(e) {
    if (e.target === this) {
      $(this).css("background-color", "limegreen");
    } else {
      $(e.target).css("background-color", "white");
      $(this).css("background-color", "black");
    }
  });


});


// others ways of loading the window
// 1.
// $(function() {
//   alert("ready for DOM manipulation");
// });

// 2.
// function readyFn(jQuery) {
//   alert("ready for DOM manipulation");
// }

// $(document).ready(readyFn);
// or
// $(window).ready(readyFn);