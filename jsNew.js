$('.version').text('1.5.3');
$('body').hide();
$(function (e){
	$('body').fadeIn(3000);
	var $btn, opOn, decOn, numOn, togNeg, $output;
	$btn = $('td > div');
	opOn = true;
	decOn = true;
	numOn = true;
	togNeg = true;
	$output = $('#output');
	$btn.on('click touch', function(e){
		if(!e){
		e=window.event;}

		switch(this.id){
			//maybe do data
			case 'one':
			case 'two':
			case 'three':
			case 'four':
			case 'five':
			case 'six':
			case 'seven':
			case 'eight':
			case 'nine':{
				if(numOn){
				$output.val($output.val() + $(this).text());
					opOn=true;
					}else{
				$output.val($(this).text());
				opOn=true; 
				numOn=true;
				togNeg=true;
				}
			}break;
			
			case 'zero':{
				if($output.val()!=='' && numOn){
					$output.val($output.val() + $(this).text());
				decOn=true;
				numOn=true;
				opOn=true;
				}
			}break;

			case 'decimal':{
				if (decOn){
					$output.val($output.val() + $(this).text());
				if($output.val()=='.'){
				$output.val('0.');
				}
				decOn=false;
				numOn=true;
				opOn=false;
				}else if($output.val()!==''){
					$output.val('0'+$(this).text());
				decOn=false;
				numOn=true;
				opOn=false;
				}
			}break;
		
			case 'add':
			case 'divide':
			case 'mult':
			case 'sub':{
				if(opOn && $output.val()!==''){
					$output.val($output.val()+$(this).text());
				opOn=false;
				numOn=true;	
				decOn=true;
				togNeg=false;	
				}else if($output.val()===''){
					$output.val('0'+$(this).text());
				opOn=false;
				numOn=true;	
				decOn=true;
				togNeg=false
				}
			}break;
		
			case 'square':{
				if(opOn && $output.val()!==''){
				var num=eval($output.val());
				$output.val(num*num);
				opOn=true
				numOn=false;	
				decOn=false;
				togNeg=true;
				}
			}break;

			case 'squareRoot':{
				if(opOn){
				//if its neg type error
				var num=eval($output.val());
				if(num >0){
					$output.val(Math.sqrt(num));
					numOn=false;	
					decOn=false;
					togNeg=true;
					}
				}
			}break;

			case 'evaluate':{
				var sol=eval($output.val());
				$output.val(sol);
				numOn=false;
				if($output.val()!==''){
				decOn=false;}
				togNeg=true
			}break;

			case 'toggleSign':{
			if($output.val()!=='' && togNeg){
				$output.val(-$output.val());	
				}
			}break;

			case 'clear':{
			$output.val('');
			decOn=true;
			opOn=true;
			}break;
		}		
	});
})












