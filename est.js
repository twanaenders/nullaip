function calculateScoreDiff(playerA, playerB) {
  if (playerA.gameOver && playerB.gameOver) {
    return playerA.score - playerB.score;
  }
}

// Usage
const playerA = { gameOver: true, score: 10 };
const playerB = { gameOver: true, score: 5 };

const scoreDiff = calculateScoreDiff(playerA, playerB);
