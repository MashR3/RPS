var operation = prompt('Welcome to Rock Paper Scissors! Would you like to play: ' + '\n ' + '\n [2] for two-player?'+ '\n [pc] to play against the computer?').toLowerCase();

if (operation === '2') {
	var p1 = prompt('Player One! You must decide!' + '\n [r] Rock' + '\n [p] Paper' + '\n [s] Scissors').toLowerCase();
	var p2 = prompt('Player Two! How will you counterattack?' + "\n [r] Rock" + "\n [p] Paper" + "\n [s] Scissors").toLowerCase();

	// if (((p1 === 'r') && (p2 === 'r')) || ((p1 === 'p') && (p2 === 'p')) || ((p1 === 's') && (p2 === 's')));
	// 	alert('You have tied!! Unacceptable! Go again!');

	} if ((p1 === 'r') && (p2 === 's')){
		alert('Player 1 is victorious!');

		} else if ((p1 === 'r') && (p2 === 'p')){
		alert('Player 2 is victorious!');

		} else if ((p1 === 's') && (p2 === 'r')){
		alert('PLayer 2 is victorious!');

		} else if ((p1 === 's') && (p2 === 'p')){
		alert('Player 1 is victorious!');

		} else if ((p1 === 'p') && (p2 === 's')){
		alert('Player 2 victorious!')

		} else if ((p1 === 'p') && (p2 === 'r')){
		alert('Player 1 victorious!');

		} else if (p1 === p2) {
			alert('No draws allowed! Again!');
		
		var game = true;

		while (game) {
			var response = prompt('Would you like to play again? [y] or [n]').toLowerCase();
			
			if (response === "n");
				game = false;
		}

	}

else if (operation === "pc") {
	var p1 = prompt("Human! I'll give you the first move!" + "\n [r] Rock" + "\n [p] Paper" + "\n [s] Scissors")


} else 
	alert("You must play!!");


// var programRunning = true;

// while (programRunning) {
// 	console.log('The program is running');
// 	var response = prompt('would you like to end the program? y/n');