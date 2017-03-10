




$(document).ready(function(){
    
    /*var  mn = $("#menu");
    mns = "main-nav-scrolled";
    hdr = 0;

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});*/
    
   function stickyMenu(){
     var nav = $("#menu");
     var navOffsetFromTop = nav.position().top;
    $(window).on("scroll", function(event){
         event.preventDefault();
         if($(window).scrollTop() > navOffsetFromTop) {
         nav.addClass("sticky");
         } else {     
         nav.removeClass("sticky");    }   
       });
   }
   stickyMenu();
    
   
   $("#menu").find('.link').on('click', function(e) {
    e.preventDefault();
    $link = $(this).attr('href');
  
    $('html, body').animate({
    scrollTop: $($link).offset().top 
  }, 800 );
  });
    
    
    
    
    
    
   $('#hamburger').click(function(){
		$(this).toggleClass('open');
        $("nav ul li").toggleClass('hiddenMenu');
        
	});
 
    var newPhoto = new Image(); 
    newPhoto.src="../images/kopniecie.jpg";
    var oldPhoto = $('#swapRafal').attr('src');
    
      $("#swapRafal").hover( // funkcja podmieniająca zdjęcia
          
          function(){
          $(this).attr('src', newPhoto.src);
           
      },
          function(){
          $(this).attr('src', oldPhoto);   
    
    });
    
     var olaPhoto = new Image();
    olaPhoto.src="../images/Ola2.jpg";
    var oldPhoto2 = $('#swapOla').attr('src');
    
      $("#swapOla").hover(
          
          function(){
          $(this).attr('src', olaPhoto.src);
           
      },
          function(){
          $(this).attr('src', oldPhoto2);   
    
    });
    
    
    // funkcjomowanie okładek albumów
    
    $(".one").click(function(){
       $(".cover").fadeOut();   
       $(".kids").removeClass("hidden");
       $(".photos").find(".close").removeClass("hidden");
    });
     
     $(".two").click(function(){
       $(".cover").fadeOut();   
       $(".adults").removeClass("hidden");
       $(".photos").find(".close").removeClass("hidden");
    });
     $(".three").click(function(){
       $(".cover").fadeOut();   
       $(".stages").removeClass("hidden");
       $(".photos").find(".close").removeClass("hidden");
    });
     $(".four").click(function(){
       $(".cover").fadeOut();   
       $(".shows").removeClass("hidden");
       $(".photos").find(".close").removeClass("hidden");
    });
   
    //Galeria dzieci
    $('.group img').each(function(i) {
	var imgFile = $(this).attr('src');
	var preloadImage = new Image();
		
    });
	
   
   $('.kids a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo').prepend(newImage);
      newImage.fadeIn(100);
      oldImage.slideDown(100, function() {
          $(this).remove();
      });
    });
    
    $('.kids a:first').click();
    
    
     // galeria dorośli
       
  
      $('.adults a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo2 img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo2').prepend(newImage);
      newImage.fadeIn(100);
      oldImage.slideDown(100, function() {
          $(this).remove();
      });
    });
    
    $('.adults a:first').click();
    
    // galeria Staże i obozy
    
     $('.stages a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo3 img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo3').prepend(newImage);
      newImage.fadeIn(100);
      oldImage.slideDown(100, function() {
          $(this).remove();
      });
    });
    
    $('.stages a:first').click();
    
    
    // galeria Pokazy
    
     $('.shows a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo4 img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo4').prepend(newImage);
      newImage.fadeIn(100);
      oldImage.slideDown(100, function() {
          $(this).remove();
      });
    });
    
    $('.shows a:first').click();
    
    // powrót do okładek albumów
  $(".photos").find(".close").click(function(){
        
         $(this).addClass("hidden");
         $(".group").addClass("hidden");
        $('html, body').animate({
    scrollTop: $("#photos").offset().top 
  }, 800 );
         $(".cover").fadeIn();
    });   
   /* var image= $(".photos").find("img");
  
    
    
    $(image).addClass("hidden");
    
    $(".group").click(function(){
        $(".cover").fadeOut();
        $(this).find("img").removeClass("hidden");
        $(".photos").find(".close").removeClass("hidden");
        
                 
    });
    
    $(".photos").find(".close").click(function(){
        
         $(this).addClass("hidden");
         $(".group").find("img").addClass("hidden");
        
         $(".cover").fadeIn();
    });
    
    
    $(image).click(function(){
        $(this).toggleClass("big");
        
        
    });*/
    
   
    
    
}); 