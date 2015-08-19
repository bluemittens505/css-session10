
var menu = $("nav ul");
$("#pull").on("click", function(e){
  e.preventDefault();
  menu.slideToggle();
});

$(window).resize(function(){
  var w = $(this).width();
  if( w > 600 && menu.is(":hidden")) {
    menu.removeAttr('style');
  }
      // console.log(w);
    });


$('.content-video a').on('click',function(e){

  $('.content-video a').removeClass('active');
  $(this).addClass('active');

  var videoToPlay = $(this).attr('href');
  $('iframe').attr('src',videoToPlay);
  console.log(videoToPlay);
      // return false;
      e.preventDefault();

    });


$('.nav-sub > li a').on('click', function(e){
 $('.nav-sub ul').slideUp();
 $(this).next().slideToggle();
     // console.log(this);
     // return false;
     e.preventDefault();
   });

$('.image-tn a').on('click', function(){
  var imgsrc = $(this).attr('href');
  var titleText = $(this).find('img').attr('title'); 
  $('.content-slider > img').attr('src',imgsrc); 
  $('.caption').html(titleText);
  return false;
});














































