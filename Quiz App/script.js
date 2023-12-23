const questions = [
  {
    question: "What has a thumb and four fingers but isn’t alive?",
    answers: [
      { Text: "Bone", correct: false },
      { Text: "Gloves", correct: true },
      { Text: "Fibgerprint", correct: false },
      { Text: "hand", correct: false },
    ],
  },
  {
    question: "What is so fragile it breaks even when mentioned?",
    answers: [
      { Text: "silence", correct: true },
      { Text: "Glass", correct: false },
      { Text: "Plastic", correct: false },
      { Text: "Emotions", correct: false },
    ],
  },
  {
    question: "What gets wetter the more it dries? ",
    answers: [
      { Text: "Hands", correct: false },
      { Text: "Moisture", correct: false },
      { Text: "Cup", correct: false },
      { Text: "Towel", correct: true },
    ],
  },
  {
    question: "What never asks a question but gets answered all the time?",
    answers: [
      { Text: "Girlfreind", correct: false },
      { Text: "Alarm", correct: false },
      { Text: "Pets", correct: false },
      { Text: "Cell Phone", correct: true },
    ],
  },
  {
    question: "What can one catch that is not thrown?",
    answers: [
      { Text: "Happiness", correct: false },
      { Text: "Fish", correct: false },
      { Text: "A Cold", correct: true },
      { Text: "Ball", correct: false },
    ],
  },
  {
    question: "A girl fell off a 50-foot ladder but didn’t get hurt. How come?",
    answers: [
      { Text: "His freind was down there", correct: false },
      { Text: "she has superpower", correct: false },
      { Text: "She lied", correct: false },
      { Text: "She fell off the bottom step", correct: true },
    ],
  },
  {
    question: "If you have one, you want to share it. But once you share it, you do not have it. What is it?",
    answers: [
      { Text: "A prmoise", correct: true },
      { Text: "your Tiffin box", correct: false },
      { Text: "Money", correct: false },
      { Text: "Home", correct: false },
    ],
  },
  {
    question: "If a plane crashes on the border between the United States and Canada, where do they bury the survivors?",
    answers: [
      { Text: "In the backward", correct: false },
      { Text: "In the ocean", correct: false },
      { Text: "gravesite", correct: false },
      { Text: "Survivors aren’t buried", correct:true },
    ],
  },
  {
    question: " If you have a bowl with six apples and you take away four, how many do you have?",
    answers: [
      { Text: "You have 2", correct: false },
      { Text: "you have 4", correct: true },
      { Text: "Nothing", correct: false },
      { Text: "You ate all", correct: false },
    ],
  },
  {
    question: "If you had only one match and entered a dark room containing an oil lamp, some kindling wood, and a newspaper, which would you light first?",
    answers: [
      { Text: "a newspaper", correct: false },
      { Text: "the match", correct: true },
      { Text: "oil lamp", correct: false },
      { Text: "lighter", correct: false },
    ],
  },
  {
    question: " What two keys can’t open any door?",
    answers: [
      { Text: "Monkey and Donkey", correct: true },
      { Text: "crickey", correct: false },
      { Text: "passkey and blokkey", correct: false },
      { Text: "whiskey and rusky", correct: false },
    ],
  },
  {
    question: " What runs but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
    answers: [
      { Text: "rabbit", correct: false },
      { Text: "Animal", correct: false },
      { Text: "River", correct: true },
      { Text: "Humans", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
