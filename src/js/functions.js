import {
	pcScoreOutput,
	gameOptionsElement,
	gameResultElement,
	resultOutput,
	playerScoreOutput,
	playerSelectionOutput,
	pcSelectionOutput
} from './dom';

import { GAME_OPTIONS, GAME_IMAGES } from './constants';

const pcOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let playerSelectionRemove = '';
let pcSelectionRemove = '';
let playerCounter = 0;
let pcCounter = 0;

const getLength = gamemode => {
	if (gamemode === 'simple') {
		return 3;
	}
	return 5;
};

const getPcSelection = length => {
	const randomNumber = Math.floor(Math.random() * length);
	return pcOptions[randomNumber];
};

const showResults = () => {
	gameOptionsElement.classList.toggle('hidden');
	gameResultElement.classList.toggle('hidden');
};

const showTextResult = result => {
	resultOutput.textContent = result;
};

const sumScore = result => {
	if (result) {
		playerCounter++;
		playerScoreOutput.textContent = playerCounter;
	} else {
		pcCounter++;
		pcScoreOutput.textContent = pcCounter;
	}
};

const printPlayerPcSelection = (player, pc) => {
	playerSelectionOutput.classList.add(player);
	pcSelectionOutput.classList.add(pc);

	console.log();
	playerSelectionOutput.children[0].src = GAME_IMAGES[player.toUpperCase()];
	pcSelectionOutput.children[0].src = GAME_IMAGES[pc.toUpperCase()];
};

const getGameWinner = event => {
	const playerSelection = event.target.dataset.selection;
	const pcSelection = getPcSelection(
		getLength(event.target.parentElement.dataset.gamemode)
	);

	playerSelectionRemove = playerSelection;
	pcSelectionRemove = pcSelection;

	printPlayerPcSelection(playerSelection, pcSelection);

	if (playerSelection === pcSelection) {
		showTextResult('DRAW');
	} else if (GAME_OPTIONS[playerSelection][pcSelection]) {
		showTextResult('YOU WIN');
		sumScore(true);
	} else {
		showTextResult('YOU LOSE');
		sumScore(false);
	}
	showResults();
};

const removeClassResults = () => {
	playerSelectionOutput.classList.remove(playerSelectionRemove);
	pcSelectionOutput.classList.remove(pcSelectionRemove);
	showResults();
};

export { getGameWinner, removeClassResults };
