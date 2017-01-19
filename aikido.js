$(document).ready(function(){
    
   
   
    var newPhoto = new Image(); 
    newPhoto.src="images/kopniecie.jpg";
    var oldPhoto = $('#swapRafal').attr('src');
    
      $("#swapRafal").hover( // funkcja podmieniająca zdjęcia
          
          function(){
          $(this).attr('src', newPhoto.src);
           
      },
          function(){
          $(this).attr('src', oldPhoto);   
    
    });
    
     var olaPhoto = new Image();
    olaPhoto.src="images/Ola2.jpg";
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
    $('.gallery img').each(function(i) {
	var imgFile = $(this).attr('src');
	var preloadImage = new Image();
		
    });
	
   
   $('.kidsGallery a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo').prepend(newImage);
      newImage.fadeIn(1000);
      oldImage.fadeOut(1000, function() {
          $(this).remove();
      });
    });
    
    $('.kidsGallery a:first').click();
    
    
     // galeria dorośli
       
  
      $('.adultsGallery a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo2 img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo2').prepend(newImage);
      newImage.fadeIn(1000);
      oldImage.fadeOut(1000, function() {
          $(this).remove();
      });
    });
    
    $('.adultsGallery a:first').click();
    
    // galeria Staże i obozy
    
     $('.stagesGallery a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo3 img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo3').prepend(newImage);
      newImage.fadeIn(1000);
      oldImage.fadeOut(1000, function() {
          $(this).remove();
      });
    });
    
    $('.stagesGallery a:first').click();
    
    
    // galeria Pokazy
    
     $('.showsGallery a').click(function(evt){
    
      evt.preventDefault();
      var imgPath = $(this).attr('href');
      var oldImage = $('#photo4 img');
      var newImage = $('<img src="' + imgPath +'">');
      newImage.hide();
      $('#photo4').prepend(newImage);
      newImage.fadeIn(1000);
      oldImage.fadeOut(1000, function() {
          $(this).remove();
      });
    });
    
    $('.showsGallery a:first').click();
    
    // powrót do okładek albumów
  $(".photos").find(".close").click(function(){
        
         $(this).addClass("hidden");
         $(".group").addClass("hidden");
        
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