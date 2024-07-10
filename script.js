const questions = [
  {
    question: "Who was the first ss3 student as at 2022 to score a goal in 2022?",
    answers: [
      { text: "Agbo Somto", correct: false },
      { text: "Ugwu Collins", correct: false },
      { text: "Igboji Paul", correct: true },
      { text: "Ugwuodo Elvigil", correct: false }
    ]
  },
  {
    question: "How many strokes did Afunwa take for being accused of bullying AVC",
    answers: [
      { text: "17", correct: false },
      { text: "24", correct: false },
      { text: "45", correct: true },
      { text: "33", correct: false }
    ]
  },
  {
    question: "Who scored the first goal for the last DAYBOARD match that was played on shalom's field",
    answers: [
      { text: "Ikpeama Franklin", correct: true },
      { text: "JohnPaul Onyishi", correct: false },
      { text: "Ehizonagha Great", correct: false},
      { text: "Izuchukwu Emmanuel", correct: false }
    ]
  },
  {
    question: "What was the last UCL match that was watched by the class of 2021/2022?",
    answers: [
      { text: "Bayern vs Villareal", correct: false },
      { text: "Liverpool vs RealMadrid", correct: true },
      { text: "Chelsea vs Real Madrid", correct: false},
      { text: "Manchester City vs Athletico Madrid", correct: false }
    ]
  },
  {
    question: "What was the record score for the DAYBOARD match which was later cancelled due to excess goals?",
    answers: [
      { text: "4 : 0 to Borders", correct: false },
      { text: "6 : 0 to Day students", correct: false },
      { text: "9 : 0 to borders", correct: false },
      { text: "9 : 1 to borders", correct: true }
    ]
  },
  {
    question: "Why was Chijoke Sopulu not present in a certain Friday games period when he was needed the  most?",
    answers: [
      { text: "He was sick", correct: false },
      { text: "He had an injury", correct: false },
      { text: "He was unhappy with himself", correct: false },
      { text: "He was in ss1A sitting with Amara and hiding so that we won't notice his absence", correct: true }
    ]
  },
  {
    question: "Somto had many girfriends during his time a SAN which of the following was the first?",
    answers: [
      { text: "Somto the great", correct: false },
      { text: "Awah Chidinma", correct: true },
      { text: "Roland Confidence", correct: false },
      { text: "Ezeh Chimadika", correct: false}
    ]
  },
  {
    question: "Who amongst the following is the tallest?",
    answers: [
      { text: "Chijoke Sopuluchukwu", correct: true },
      { text: "Chibuke Feanklin", correct: false },
      { text: "Odo ThankGod", correct: false },
      { text: "Onugu Chiedozie", correct: false }
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion  = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
      }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct")
    }
    button.disabled = true;
  }) ;
  nextButton.style.display = "block";   

}

function showScore(){
  resetState();
  questionElement.innerHTML = "Your Scored "+ score + " out of "+ questions.length + " !";
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block"
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }
})

startQuiz();




