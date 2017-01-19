$(document).ready(function(){
    
   
   
    var newPhoto = new Image();
    newPhoto.src="images/kopniecie.jpg";
    var oldPhoto = $('#swapRafal').attr('src');
    
      $("#swapRafal").hover(
          
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
    
    $(".one").click(function(){
       $(".cover").fadeOut();   
       $(".kids").removeClass("hidden");
       $(".photos").find(".close").removeClass("hidden");
    });
     
   
    
    $('#gallery img').each(function(i) {
	var imgFile = $(this).attr('src');
	var preloadImage = new Image();
	
		
	
});
	

$('#gallery a').click(function(evt){
    
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
    
$('gallery a:first').click();
    
    
    
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