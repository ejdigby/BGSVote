$(document).ready(function() {
    var houseDefinitions = {
	"houseNames": [
		"Behn",
		"Meitner",
		"Rorschach",
		"Tinbergen"
	],
	"houseColors": [
		"#AC10BA",
		"#ED6000",
		"#17BA00",
		"#1264C9"
	],
	"houseLetters": [
		"B",
		"M",
		"R",
		"T"
	]
	};

	function changeText(){
		var houses = ['behn', 'meitner', 'rorschach', 'tinbergen'];
		var random = Math.floor(Math.random() * houses.length) + 1
		var currentHouse = houses[random]

		switch (currentHouse) {
    	case 'behn':
        	$('.houseName').text(houseDefinitions["houseNames"][0]);
			$('.houseLetter').text(houseDefinitions["houseLetters"][0]);
			$('.houseName').css("color", houseDefinitions["houseColors"][0]);
			$('.houseLetter').css("color", houseDefinitions["houseColors"][0]);
	        break;
	    case 'meitner':
    	    $('.houseName').text(houseDefinitions["houseNames"][1]);
			$('.houseLetter').text(houseDefinitions["houseLetters"][1]);
			$('.houseName').css("color", houseDefinitions["houseColors"][1]);
			$('.houseLetter').css("color", houseDefinitions["houseColors"][1]);
        	break;
  	  	case 'rorschach':
        	$('.houseName').text(houseDefinitions["houseNames"][2]);
			$('.houseLetter').text(houseDefinitions["houseLetters"][2]);
			$('.houseName').css("color", houseDefinitions["houseColors"][2]);
			$('.houseLetter').css("color", houseDefinitions["houseColors"][2]);
	        break;
    	case 'tinbergen':
        	$('.houseName').text(houseDefinitions["houseNames"][3]);
			$('.houseLetter').text(houseDefinitions["houseLetters"][3]);
			$('.houseName').css("color", houseDefinitions["houseColors"][3]);
			$('.houseLetter').css("color", houseDefinitions["houseColors"][3]);
        	break;
		}
	};

	$('.howToVote').delay(2000).fadeIn();

	setInterval(function(){
		changeText()
	},2000);
});
