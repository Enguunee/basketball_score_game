let homeScoreEl = document.getElementById("home_score");
let guestScoreEl = document.getElementById("guest_score");
let h_score = 0;
let g_score = 0;

function add_one_home() {
  h_score += 1;
  homeScoreEl.textContent = h_score;
}

function add_two_home() {
  h_score += 2;
  homeScoreEl.textContent = h_score;
}

function add_three_home() {
  h_score += 3;
  homeScoreEl.textContent = h_score;
}

function add_one_guest() {
  g_score += 1;
  guestScoreEl.textContent = g_score;
}

function add_two_guest() {
  g_score += 2;
  guestScoreEl.textContent = g_score;
}

function add_three_guest() {
  g_score += 3;
  guestScoreEl.textContent = g_score;
}

function reset_scores() {
  h_score = 0;
  g_score = 0;
  homeScoreEl.textContent = h_score;
  guestScoreEl.textContent = g_score;
}

