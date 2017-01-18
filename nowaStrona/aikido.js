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
    
    
    
    var image= $(".photos").find("img");
  
    
    
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
        
        
    });
    
    
    
    
    
}); 