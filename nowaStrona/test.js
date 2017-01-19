

    
function countdown(eventDate, selector, style){
	setInterval(function () {
		var target_date = new Date(eventDate).getTime(),
		 	days, hours, minutes, seconds,
		    current_date = new Date().getTime(),
		    seconds_left = (target_date - current_date) / 1000;
	 
	    days = parseInt(seconds_left / 86400);
	    seconds_left = seconds_left % 86400;
	     
	    hours = parseInt(seconds_left / 3600);
	    seconds_left = seconds_left % 3600;
	     
	    minutes = parseInt(seconds_left / 60);
	    seconds = parseInt(seconds_left % 60);
	    function addZero(n){
	  		if(n<10){
	  			return "0"+n
	  		}
	  		return n
	    }
	    if(target_date - current_date > 0){
	    	if(days>0){
	    		$(selector).css('position', 'relative').html('<span style="'+style+'">'+addZero(days) + ' &nbsp;DNI&nbsp; ' + addZero(hours) + ' &nbsp;GODZIN&nbsp;  ' + addZero(minutes) + ' &nbsp;MINUT&nbsp;  ' + addZero(seconds)  + ' &nbsp;SEKUND&nbsp; ' + '</style>');
               
                
	    	}else{
	    		$(selector).css('position', 'relative').html('<span style="'+style+'">'+addZero(hours) + ' &nbsp;:&nbsp;  ' + addZero(minutes) + ' &nbsp;:&nbsp; ' + addZero(seconds) + '</style>');
	    	}
	    }else{
	    	$(selector).css('position', 'relative').html('<span style="'+style+'">0d 0h 0m 0s</style>');
	    }  
	 
	}, 1000);
}

countdown("February 9, 2017 23:59:00", "#countdownTimer", "display: inline-table");
</script>


 <Img class="banerBest" src="http://media.empik.com/content/bestsellery-empiku/odliczanie_tlo.jpg">

	<div class="countdown">       
	         <span class="word left">do gali bestsellerów pozostało jeszcze</span>
               <div id="countdownTimer"></div>
		
		
	</div>

