$(document).ready(() => {
//hide audio
  function hideAll() {
      $('#song1').hide();
      $('#song2').hide();
      $('#song3').hide();
      $('#song4').hide();
      $('#name1').hide();
      $('#name2').hide();
      $('#name3').hide();
      $('#name4').hide();
    }
      hideAll();

//show audio
   $('.albumCover').click(function() {

     hideAll();

    $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
    });


     switch ($(this).attr("id")) {
       case "album1":
         $('#song1').show();
         $('#name1').show();
         break;
       case "album2":
         $('#song2').show();
         $('#name2').show();
         break;
       case "album3":
         $('#song3').show();
         $('#name3').show();
         break;
       case "album4":
         $('#song4').show();
         $('#name4').show();
         break;
     }
   });
//move album covers

$('.albumCover').mouseenter (function() {
    $(this).animate( { left: "+=50px" }, 'fast' );
	});

$('.albumCover').mouseleave (function() {
    $(this).animate( { left: "-=50px" }, 'fast' );
  });


//

});
