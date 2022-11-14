const stats = {
  score: 0,
  scoreP1: 0,
  scoreP2: 0,
  turn: 'P1',
  doubleSix: false,
};

const resetStats = () => {
  const { score, scoreP1, scoreP2, turn, previousTurn } = stats;
  const { doubleSix, player } = previousTurn;
  score = 0;
  scoreP1 = 0;
  scoreP2 = 0;
  turn = 'P1';
  doubleSix = false;
  player = 'P1';
};

const roll = () => Math.floor(Math.random() * 6) + 1;

const handleRoll = () => {
  const d1 = roll(),
    d2 = roll();

  console.log(d1, ' ', d2);

  if (d1 === 6 && d2 === 6) {
    if (stats.doubleSix) {
      changeTurn(true);
    } else {
      stats.doubleSix = true;
      stats.score += d1 + d2;
    }
  } else if (d1 === 1 || d2 === 1) {
    changeTurn(false);
  } else stats.score += d1 + d2;

  console.log(stats.score);
};

const changeTurn = (reset) => {
  if (stats.turn === 'P1') {
    if (reset) stats.scoreP1 = 0;
    stats.score = 0;
    stats.turn = 'P2';
    stats.doubleSix = false;
  } else {
    if (reset) stats.scoreP2 = 0;
    stats.score = 0;
    stats.turn = 'P1';
    stats.doubleSix = false;
  }
};
