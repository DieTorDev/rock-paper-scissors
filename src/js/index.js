import { gameOptionsElement, playAgainElement } from './dom';
import { getGameWinner, removeClassResults } from './functions';

gameOptionsElement.addEventListener('click', getGameWinner);
playAgainElement.addEventListener('click', removeClassResults);
