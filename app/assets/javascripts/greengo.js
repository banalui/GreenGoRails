var currentAdultNumber = 2;
var currentKidNumber = 0;
var currentRoomNumber = 1;
var selectGuestNumberWindowOpened = 0;

$(document).ready(function(){

	/*$("input").blur(function(){

		if($(this).val()){
			$(this).addClass("used");
		}
		else{
			$(this).removeClass("used");
		}
	});
	$('.dropdown-toggle').dropdown()*/
});

function myFunction(){
	if(!selectGuestNumberWindowOpened){
		selectGuestNumberWindowOpened = 1;
		$(".upperpartheading4 pre").css("display", "none");
		$(".howmanywrapper").append('<div class="searchwindowdiv"></div>');
		$(".searchwindowdiv").height(100);
		$(".searchwindowdiv").width(200);
		$(".searchwindowdiv").css("background-color", "white");
		$(".searchwindowdiv").css("position", "absolute");
		$(".searchwindowdiv").css("top", "42px");
		$(".searchwindowdiv").css("border", "1px solid #ccc");
		$(".searchwindowdiv").css("box-shadow", "1px 2px 5px rgba(0,0,0,0.1)");
		$(".searchwindowdiv").css("padding-left", "15px");
		$(".searchwindowdiv").css("padding-top", "15px");

		var selectNumberOfGuestsForm = 	'<form>' +
										'	<span class="sliderLabelAdult">Adults</span><input type="range" name="adultRange" class="adultRangeSlider" min="1" max="10" onchange="updateTextInputAdult(this.value);" value="2">' +
										'	<output name="adultOutputRange" id="adultOutputID" class="adultRangeSliderOutput">2</output>' +
										'	<span class="sliderLabelKid">Kids</span><input type="range" name="kidRange" class="kidRangeSlider" min="0" max="10" onchange="updateTextInputKid(this.value);" value="0">' +
										'	<output name="kidOutputRange" id="kidOutputID" class="kidRangeSliderOutput">0</output>' +
										'	<span class="sliderLabelRoom">Rooms</span><input type="range" name="roomRange" class="roomRangeSlider" min="1" max="4" onchange="updateTextInputRoom(this.value);" value="1">' +
										'	<output name="roomOutputRange" id="roomOutputID" class="roomRangeSliderOutput">1</output>' +
										'</form>';
		$(".searchwindowdiv").append(selectNumberOfGuestsForm);
		$(".adultRangeSlider").width(110);
		$(".adultRangeSlider").css("position", "absolute");
		$(".adultRangeSliderOutput").css("position", "absolute");
		$(".adultRangeSliderOutput").css("right", "10px");
		$(".adultRangeSlider").css("right", "30px");

		$(".kidRangeSlider").width(110);
		$(".kidRangeSlider").css("position", "absolute");
		$(".kidRangeSlider").css("right", "30px");
		$(".kidRangeSlider").css("top", "50px");
		$(".kidRangeSliderOutput").css("position", "absolute");
		$(".kidRangeSliderOutput").css("right", "10px");
		$(".kidRangeSliderOutput").css("top", "50px");
		$(".sliderLabelKid").css("top", "50px");
		$(".sliderLabelKid").css("left", "26px");
		$(".sliderLabelKid").css("position", "absolute");


		$(".roomRangeSlider").width(110);
		$(".roomRangeSlider").css("position", "absolute");
		$(".roomRangeSlider").css("right", "30px");
		$(".roomRangeSlider").css("top", "85px");
		$(".roomRangeSliderOutput").css("position", "absolute");
		$(".roomRangeSliderOutput").css("right", "10px");
		$(".roomRangeSliderOutput").css("top", "85px");
		$(".sliderLabelRoom").css("top", "85px");
		$(".sliderLabelRoom").css("left", "15px");
		$(".sliderLabelRoom").css("position", "absolute");
	}
	else{
		$(".searchwindowdiv").css("display", "block");
	}
}



function updateTextInputAdult(val) {
    document.getElementById('adultOutputID').value = val;
    var updatedString = val + " adults, " + currentKidNumber + " kids, " + currentRoomNumber + "rooms";
    $('input[name=howmanyinputname]').val(updatedString);
    $(".upperpartheading4 pre").css("display", "none");
    currentAdultNumber = val;
}
function updateTextInputKid(val) {
    document.getElementById('kidOutputID').value = val;
    var updatedString = currentAdultNumber + " adults, " + val + " kids, " + currentRoomNumber + "rooms";
    $('input[name=howmanyinputname]').val(updatedString);
    $(".upperpartheading4 pre").css("display", "none");
    currentKidNumber = val;
}
function updateTextInputRoom(val) {
    document.getElementById('roomOutputID').value = val;
    var updatedString = currentAdultNumber + " adults, " + currentKidNumber + " kids, " + val + "rooms";
    $('input[name=howmanyinputname]').val(updatedString);
    $(".upperpartheading4 pre").css("display", "none");
    currentRoomNumber = val;
}

$(document).on('click', function(event) {
  	if (!$(event.target).closest('.upperpartheading4').length) {
  		if(selectGuestNumberWindowOpened){
    		$(".searchwindowdiv").css("display", "none");
    		var updatedString = currentAdultNumber + " adults, " + currentKidNumber + " kids, " + currentRoomNumber + "rooms";
    		$('input[name=howmanyinputname]').val(updatedString);
    	}
  	}
});
