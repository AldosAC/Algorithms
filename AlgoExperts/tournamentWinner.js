function tournamentWinner(competitions, results) {
  let scoreBoard = {};
	let leader = '';
	
	for (let i = 0; i < results.length; i++) {
		let winner = '';
		let competitors = competitions[i];
		
		if (results[i] === 1) {
			//Home wins
			winner = competitors[0];
		} else {
			//Away wins
			winner = competitors[1];
		}
		
		scoreBoard[winner] = scoreBoard[winner] + 3 || 3;
		
		if (!scoreBoard[leader] || scoreBoard[winner] > scoreBoard[leader]) {
			leader = winner;
		}
	}
	
  return leader;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
