var time = 60;
var score = 0;

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
	],
	'thisAnswer': ['Whiskey, bitters and vermouth', 'Vodka (or gin), vermouth, olive (or twist)', 'Peach Schnapps, orange juice and cherry syrup', 'Gin, Lemon Juice, Sugar, Soda', 'Bourbon and Orange Juice'
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
		var chk = $('<input>').attr("type", "checkbox").attr("class", ans).attr("value", opt);
		$("#yourOption"+i).append('<br>').append(chk).append(opt);

	};

};

var submit = $('<input>').attr("type", "submit").html("submit").attr("id","sub");
$('#quiz').append(submit);

$('#sub').on('click', function(){

	for (var i = 0; i < quizList.thisIsQuiz.length; i++){

		var userChoice = $('.userClick'+i+':checkbox:checked').val();
		console.log(userChoice);

		var theAns =quizList.thisAnswer[i];
		console.log(theAns);

		if (userChoice == theAns){
		score++;
		};
		console.log(score);

	 };

	 var qN = quizList.thisIsQuiz.length;
	 var quizNumber = $('<div>').html("Total Quiz Number:  " + qN);
	 var correct = $('<div>').html("Correct Answer: " + score);

	 clearInterval(counter);

	 $('#remaining').empty();
	 $('#remaining').html('<h2>All Done</h2>');

	 $('#quiz').empty();
	 $('#quiz').append(quizNumber).append(correct);


});


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






