
//  console.log($('#domo').offset().top);
let domeOffset = $('#domo').offset().top

 $(window).scroll(function(){
//  console.log($(window).scrollTop())
  let windowScroll =$(window).scrollTop()
  if(windowScroll>domeOffset -70){
    $('#header').css('backgroundColor','black')
  }
  else{
    $('#header').css('backgroundColor','transparent')

  }

 })

$(document).ready(function(){
  $('.logan .sk-cube-grid').fadeOut(1000,function(){
    $('.logan').fadeOut(1000,function(){
  
      $('body').css('overflow','auto')
        $('.logan').remove()
    })
  })
})

