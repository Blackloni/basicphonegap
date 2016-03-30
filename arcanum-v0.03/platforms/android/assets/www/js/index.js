$(function(){

$(".coeur1").click(function(){
      $(".coeur1").css({display:"none"});
      $(".coeur2").css({display:"block"});
   });

$(".coeur2").click(function(){
      $(".coeur2").css({display:"none"});
      $(".coeur1").css({display:"block"});
   });
$(".coeur3").click(function(){
      $(".coeur3").css({display:"none"});
      $(".coeur4").css({display:"block"});
   });

$(".coeur4").click(function(){
      $(".coeur4").css({display:"none"});
      $(".coeur3").css({display:"block"});
   });
$(".coeur5").click(function(){
      $(".coeur5").css({display:"none"});
      $(".coeur6").css({display:"block"});
   });

$(".coeur6").click(function(){
      $(".coeur6").css({display:"none"});
      $(".coeur5").css({display:"block"});
   });

$(".info-plus").click(function(){
    $(".info-pratiques").slideToggle();
});

$(".btn-mystere").click(function(){
    $(".favoris-mystere").css({display:"block"});
    $(".favoris-themes").css({display:"none"});
});

$(".btn-favoris").click(function(){
    $(".favoris-themes").css({display:"block"});
    $(".favoris-mystere").css({display:"none"});
});

$(".btn-video1").click(function(){
    $(".video1").css({display:"block"});
});

$(".btn-video2").click(function(){
    $(".video2").css({display:"block"});
});
$(".fermer").click(function(){
    $(".video1").css({display:"none"});
    $(".video2").css({display:"none"});
});



$(function () {
  'use strict';

  $(".slider figure img").load(function () {
    resizeSlider();
  });

  function defile() {
    $(".slider ul li:last-child").find("img").css({
      transform: "scale(1.3,1.3)"
    });
    $(".slider ul li:last-child").fadeOut(2000, function () {
      $(".slider ul li:first-child").before($(".slider ul li:last-child"));
    });
    $(".slider ul li:first-child").fadeIn(100);
    $(".slider ul li:first-child").find("img").css({
      transform: "scale(1,1)"
    });
  }

  var tend = setInterval(defile, 5000);

});

/*$(".slider .next").click(function(){
          clearInterval(tend);
          var w = $(window).width();
    w=w*nbSlides;
    $(".slider ul").width(w);
    var wli = w/nbSlides;
    $('.slider ul').animate({left:-wli},500,function(){
      $('.slider ul li:last').after($('.slider ul li:first'));
      $(this).css({left:0});
    });*/
$(".slider .next").click(function(){

  $('.slider ul li:last').after($('.slider ul li:first'));
  });
$(".slider .prev").click(function(){

  $('.slider ul li:first').before($('.slider ul li:last'));
  });
});
