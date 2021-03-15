$(document).ready(function(){

  // hover

  // se hover(function(){}) diventasse click(function(){}) funzionerebbe come un toggle menu

    $('.btn-menu').hover(function(){
      if($(this).find('.menu').hasClass('active') === false){
        $('.btn-menu').find('.menu').removeClass('active');
        $(this).find('.menu').addClass('active')
      } else {
        $(this).find('.menu').removeClass('active')
      }
  })


  // click

  /*
  
  ------------ // Se volessi bloccare il menu al click lasciando attivo l'hover?
  
  ---------------------- $('.btn-menu').click(function() {
  ----------------------   $(this).find('.menu').toggleClass('active')
  ---------------------- })

  */

})