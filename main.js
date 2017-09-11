var operation = prompt('Welcome to Rock Paper Scissors! Would you like to play: ' + '\n ' + '\n [2] for two-player?'+ '\n [pc] to play against the computer?').toLowerCase();

if (operation === '2') {
	var p1 = prompt('Player One! You must decide!' + '\n [r] Rock' + '\n [p] Paper' + '\n [s] Scissors').toLowerCase();
	var p2 = prompt('Player Two! How will you counterattack?' + "\n [r] Rock" + "\n [p] Paper" + "\n [s] Scissors").toLowerCase();

	// if (((p1 === 'r') && (p2 === 'r')) || ((p1 === 'p') && (p2 === 'p')) || ((p1 === 's') && (p2 === 's')));
	// 	alert('You have tied!! Unacceptable! Go again!');

	} if ((p1 === 'r') && (p2 === 's')){
		alert('p1 you are victorious!');

		} else if ((p1 === 'r') && (p2 === 'p')){
		alert('p2 you are victorious!');

		} else if ((p1 === 's') && (p2 === 'r')){
		alert('p2 you are victorious!');

		} else if ((p1 === 's') && (p2 === 'p')){
		alert('p1 you are victorious!');

		} else if ((p1 === 'p') && (p2 === 's')){
		alert('p2 you are victorious!')

		} else if ((p1 === 'p') && (p2 === 'r')){
		alert('p1 you are victorious!');

		} else if (p1 === p2) {
			alert('No draws allowed! Again!');
		
	}

else if (operation === "pc") {
	var p1 = prompt("Human! I'll give you the first move!" + "\n [r] Rock" + "\n [p] Paper" + "\n [s] Scissors")


} else 
	alert("You must play!!");




// 	} else if (adop === "p") {
// 		var no2 = parseFloat(prompt('Enter base number'));
// 		var no3 = parseFloat(prompt('Enter number power'));
// 		alert ("The answer is " + (Math.pow(no2, no3)));

// 	} else {
//   		alert('Please select a valid operator!');
// }