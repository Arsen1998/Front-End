const btnScore = document.getElementById("score");
const btnAccept = document.getElementById("accept");
const btnReset = document.getElementById("reset");
// texts
const textScore = document.getElementById("score-text");
const textAccept = document.getElementById("accept-text");
// team
const team = {
  players: 11,
  subStitute: 5,
  goals: {
    scored: 0,
    accepted: 0,
  },
  disqualified: 0,
  time: 0,
  btns: {
    score: btnScore,
    accept: btnAccept,
    reset: btnReset,
  },
  texts: {
    score: textScore,
    accept: textAccept,
  },
  changeScore() {
    this.goals.scored++;
    this.texts.score.innerText = this.goals.scored;
    team1.goals.accepted++;
    team1.texts.accept.innerText = team1.goals.accepted;
  },
  changeAccept() {
    this.goals.accepted++;
    this.texts.accept.innerText = this.goals.accepted;
  },
  resetGoals() {
    this.goals.accepted = 0;
    this.goals.scored = 0;
    this.texts.score.innerText = 0;
    this.texts.accept.innerText = 0;
  },
};
team.btns.score.onclick = () => team.changeScore();
team.btns.accept.onclick = () => team.changeAccept();
team.btns.reset.onclick = () => team.resetGoals();





const btnScore1 = document.getElementById("score1");
const btnAccept1 = document.getElementById("accept1");
const btnReset1 = document.getElementById("reset1");
// texts
const textScore1 = document.getElementById("score-text1");
const textAccept1 = document.getElementById("accept-text1");
const team1 = {
  players: 11,
  subStitute: 5,
  goals: {
    scored: 0,
    accepted: 0,
  },
  disqualified: 0,
  time: 0,
  btns: {
    score: btnScore1,
    accept: btnAccept1,
    reset: btnReset1,
  },
  texts: {
    score: textScore1,
    accept: textAccept1,
  },
  changeScore() {
    this.goals.scored++;
    this.texts.score.innerText = this.goals.scored;
    team.goals.accepted++;
    team.texts.accept.innerText = team.goals.accepted;
  },
  changeAccept() {
    this.goals.accepted++;
    this.texts.accept.innerText = this.goals.accepted;
  },
  resetGoals() {
    this.goals.accepted = 0;
    this.goals.scored = 0;
    this.texts.score.innerText = 0;
    this.texts.accept.innerText = 0;
  },
};

team1.btns.score.onclick = () => team1.changeScore();
team1.btns.accept.onclick = () => team1.changeAccept();
team1.btns.reset.onclick = () => team1.resetGoals();



