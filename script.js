$(document).ready(function(){

var tdcount = 0;

var trcount = 0;

var count = undefined;

function updateTd(){
	tdcount = 0;
		while (tdcount < count){
			$("#tr"+trcount).append('<td id="td'+tdcount+'" style="height:'+550/count+'px;width:'+550/count+'px" class="inactive"></td>');
			tdcount++;
		}
	};

function updateTr(){
	while(trcount > 0){
		$('tr').remove();
		trcount --;
	}
	trcount = 0;
		while (trcount < count){
			$("#table").append('<tr id="tr'+trcount+'"></tr>');
			updateTd();
			trcount++;
		}
	};

function updateCount(){
		count = document.getElementById("countinput").value;
			if (count > 1 && count < 129){
			count = count;
			} else {
			count = 16;
			}
		console.log(count);

		updateTr();
	};

$(document).ready(function(){
	var count = 16;
	updateTr();
});

$("#gobutton").on('click', function(){
	updateCount();
});

	$("td").mouseover(
		function(){
			$(this).attr('class', 'active');
	});

});