/**
 * Increases the home team's score by 1
 */
function homePlusOne() {
  let checker = document.getElementById("home-score")
  checker.textContent = Number(checker.textContent)+1
}

/**
 * Increases the home team's score by 2
 */
function homePlusTwo() {
  let checker = document.getElementById("home-score")
  checker.textContent = Number(checker.textContent)+2
}

/**
 * Increases the home team's score by 3
 */
function homePlusThree() {
  let checker = document.getElementById("home-score")
  checker.textContent = Number(checker.textContent)+3
}

/**
 * Resets the home team's score to 0
 */
function homeReset() {
  let checker = document.getElementById("home-score")
  checker.textContent = 0
}

/**
 * Increases the away team's score by 1
 */
function awayPlusOne() {
  let checker = document.getElementById("away-score")
  checker.textContent = Number(checker.textContent)+1
}

/**
 * Increases the away team's score by 2
 */
function awayPlusTwo() {
  let checker = document.getElementById("away-score")
  checker.textContent = Number(checker.textContent)+2
}

/**
 * Increases the away team's score by 3
 */
function awayPlusThree() {
  let checker = document.getElementById("away-score")
  checker.textContent = Number(checker.textContent)+3
}

/**
 * Resets the away team's score to 0
 */
function awayReset() {
  let checker = document.getElementById("away-score")
  checker.textContent = 0
}
