// Game start
window.onload = function(){
	$(".answer").on("click", function(){
		game.selectedAnswer = $(this).text();
		game.reveal();
	});
};

// Questions, answers and associated images
var game = {
	questions:[
	{	
		question:"",
		answers:["Begin!", "" , "" , ""]
	},
	{
		question:"1) Which video game character is blue, spiky, and fast?",
		answers:["Megaman", "Megaman Zero", "Sonic", "Yoshi"],
		correctAnswerIndex: 2,
		gifImage:"https://media.giphy.com/media/B5ow7VrG7JvPy/giphy.gif"
	},
	{
		question:"2) This character kidnaps the heroin and hides her in his castle:",
		answers:["Mario", "Godzilla", "Robotnik", "Bowser"],
		correctAnswerIndex:3,
		gifImage:"https://media.giphy.com/media/J5iUpmjlQzKoM/giphy.gif"
	},
	{
		question:"3) Which videogame character was created by Dr. Light?",
		answers:["Ultraman","Megaman","Gundam Wing","Samus"],
		correctAnswerIndex:1,
		gifImage:"https://media.giphy.com/media/13mNjj0fI5Q8F2/giphy.gif"
	},
	{
		question:"4) The main character of The Legend of Zelda is:",
		answers:["Zelda","Kite","Jigglypuff","Link"],
		correctAnswerIndex:3,
		gifImage:"https://media.giphy.com/media/FAbagwvmKAgBa/giphy.gif"
	},
	{
		question:"5) This games is based off an Anime where you catch and train critters with balls:",
		answers:["Digimon","Monster Ranchers","Pokemon","Persona 3"],
		correctAnswerIndex:2,
		gifImage:"https://media.giphy.com/media/yCmFu8ALPRGE0/giphy.gif"
	},
	{
		question:"6) This popular game by Nintendo lets you battle with characters from various games:",
		answers:["Bayonetta","Super Smash Bros.","Unreal Tournament","Mortal Kombat"],
		correctAnswerIndex:1,
		gifImage:"https://media.giphy.com/media/vdITHSggiwB1e/giphy.gif"
	}],
	numberOfQuestions:6,
	counter: "",
	state: 0,
	timeRemaining: 30,
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	selectedAnswer: "",

	// Game timers
	progress:function(){
		game.state++;
		game.resetTimer();
		if(game.state <= game.numberOfQuestions)
		{
			$("#timeRemaining").text("Time Remaining: " + game.timeRemaining + " seconds");
			game.counter = setInterval(game.count, 1000);
			$("#question").text(game.questions[game.state].question);
			$("#answer1").text(game.questions[game.state].answers[0]);
			$("#answer2").text(game.questions[game.state].answers[1]);
			$("#answer3").text(game.questions[game.state].answers[2]);
			$("#answer4").text(game.questions[game.state].answers[3]);

		}
		else
		{
			$("#timeRemaining").empty();
			$("#question").html('Score:<br><h3>Correct Answers: ' + game.correctAnswers+ '<br>Incorrect Answers: '+ game.incorrectAnswers +'<br>Unanswered: ' + game.unanswered + '</h3>');
			$("#answer1").text("Retry?");
			$("#answer2").empty();
			$("#answer3").empty();
			$("#answer4").empty();
			//reset game
			game.state = 0;
			game.incorrectAnswers = 0;
			game.correctAnswers = 0;
			game.unanswered = 0;
		}



	},
	count:function(){
		game.timeRemaining--;
		$("#timeRemaining").text("Time Remaining: " + game.timeRemaining + " seconds");
		if (game.timeRemaining == 0)
		 {
		 	game.selectedAnswer = "";
		 	game.reveal();
		 }
	},

// Reset game
	resetTimer:function(){
		game.timeRemaining = 30;
	},
	
// Show answers
	reveal:function(){
		if(game.state > 0)
		{
			if(game.questions[game.state].answers[game.questions[game.state].correctAnswerIndex] == game.selectedAnswer )
			{
				game.correctAnswers++;
				$("#question").html('Correct!<br><br><br><img src="'+ game.questions[game.state].gifImage +'">');
				$("#answer1").empty();
				$("#answer2").empty();
				$("#answer3").empty();
				$("#answer4").empty();
			}
			else if(game.selectedAnswer == "")
			{
				game.unanswered++;
				$("#question").html('Out of Time!<br><br><h3>The correct answer was: ' + game.questions[game.state].answers[game.questions[game.state].correctAnswerIndex] +'</h3><br><img src="'+ game.questions[game.state].gifImage +'">');
				$("#answer1").empty();
				$("#answer2").empty();
				$("#answer3").empty();
				$("#answer4").empty();			
			}
			else
			{
				game.incorrectAnswers++;
				$("#question").html('Nope!<br><br><h3>The correct answer was: ' + game.questions[game.state].answers[game.questions[game.state].correctAnswerIndex]+'</h3><br><img src="'+ game.questions[game.state].gifImage +'">');
				$("#answer1").empty();
				$("#answer2").empty();
				$("#answer3").empty();
				$("#answer4").empty();			
			}
			clearInterval(game.counter);
			setTimeout(game.progress, 4000);
		}
		else
			game.progress();
	}
};