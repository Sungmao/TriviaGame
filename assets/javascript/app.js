var time = 60;

var quizList = { 
	'thisIsQuiz': [
		'Q1: What is in a Manhattan ?', 'Q2: What is in a martini ?','Q3: What is in a Fuzzy Navel', 'Q4: What is in a Tom Collins', 'Q5: What is in a Kentucky Screwdriver'
	],
	'thisIsOption': [
		['Gin, bitters and juice', 'Rum, sugar and cherries', 'Whiskey, bitters and vermouth', 'Burbon, vermouth and lime'],
		['Vodka (or gin), vermouth, olive (or twist)', 'Bourbon and seltzer', 'Vodka, cranberry juice and a twist', 'Rum, cola, and a lemon'],
		['Peach Schnapps, orange juice and cherry syrup', 'Vodka, Orange Juice and Peach Schnapps', 'Campagne, grapefruit juice and amaretto', 'Gin, lime juice and sugar'],
		['Rum, Apple Juice and Cherries', 'Tequila, Lime Juice and Triple Sec', 'Ammarretto, Scotch and Milk', 'Gin, Lemon Juice, Sugar, Soda'],
		['Bourbon and Grapefruit Juice', 'Whiskey and Scotch', 'Bourbon and Orange Juice', 'Budweiser and Bourbon']
	]
};


$('#quiz').hide();




for (var i=0; i < quizList.thisIsQuiz.length; i++) {
	var qu = $('<div>').attr('id', 'yourOption'+i);
	qu.html(quizList.thisIsQuiz[i]);
	$('#quiz').append(qu).append('<br>');


	for( var j=0; j < quizList.thisIsOption[i].length; j++){
		
		var ans = "userClick"+i;
		var opt = quizList.thisIsOption[i][j];
		var chk = $('<input>').attr("type", "checkbox").attr("id", "ans").attr("value", quizList.thisIsOption[i][j]);
		$("#yourOption"+i).append('<br>').append(chk).append(opt);

		console.log(opt);
		//var test = $('#ans').val();
		//console.log(test);

	};

};

var submit = $('<input>').attr("type", "submit").html("submit");
$('#quiz').append(submit);



//var test = $('#ans').val();
//console.log(test);

$('input[type="checkbox"]').on('change', function() {
   $(this).siblings('input[type="checkbox"]').prop('checked', false);
});

function start(){

	$('#timer').hide();
	$('#quiz').show();
	$('#remaining').html('<h2> Time Remaining : '+time+'</h2>');

	counter = setInterval( count, 1000);


};

function count(){

	time--;

	$('#remaining').html('<h2> Time Remaining : '+time+'</h2>');


	if (time === 0){
		stop();

	};

};

function stop(){

	clearInterval(counter);
	alert("time's up!!!");

};

$('button').on('click', start);






