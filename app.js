let questions = [
  {
    ques: "What is the capital of France?",
    op1: "Paris",
    op2: "Rome",
    op3: "Berlin",
    op4: "London",
    trueAnswer: "Paris",
  },
  {
    ques: `Who wrote "Romeo and Juliet"?`,
    op1: "William Shakespeare",
    op2: "Charles Dickens",
    op3: "Jane Austen",
    op4: "Mark Twain",
    trueAnswer: "William Shakespeare",
  },
  {
    ques: `What is the chemical symbol for water?`,
    op1: "H2O",
    op2: "CO2",
    op3: "NaCl",
    op4: "O2",
    trueAnswer: "H2O",
  },
  {
    ques: `Which planet is known as the "Red Planet"?`,
    op1: "Mars",
    op2: "Venus",
    op3: "Jupiter",
    op4: "Saturn",
    trueAnswer: "Mars",
  },
  {
    ques: `Who painted the Mona Lisa?`,
    op1: "Vincent van Gogh",
    op2: "Pablo Picasso",
    op3: "Leonardo da Vinci",
    op4: "Michelangelo",
    trueAnswer: "Leonardo da Vinci",
  },
];

// Accessing variables
let marks = 0; //counts score
let currentQuestion = 0; // Keeps account of current question
let ques = document.getElementById("ques");
let p1 = document.querySelector("#op1>p");
let p2 = document.querySelector("#op2>p");
let p3 = document.querySelector("#op3>p");
let p4 = document.querySelector("#op4>p");
let radio = document.querySelectorAll(".op>input");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".Prev");
let checkBtn = document.querySelector(".Check");

window.addEventListener("DOMContentLoaded", () => {
  showQuestion(currentQuestion);
});

function showQuestion(currentQuestion) {
  if (currentQuestion < 5) {
    ques.innerHTML = `Q${currentQuestion + 1}. ${
      questions[currentQuestion].ques
    }`;
    p1.textContent = questions[currentQuestion].op1;
    p2.textContent = questions[currentQuestion].op2;
    p3.textContent = questions[currentQuestion].op3;
    p4.textContent = questions[currentQuestion].op4;
  }
  else{
    showScore();
  }
}

function showScore(){
  document.querySelector('section').innerHTML = `Marks: ${marks}`
}

// prevBtn.addEventListener("click", () => {
//   currentQuestion--;
//   if (currentQuestion < 0) {
//     currentQuestion = 0;
//     showQuestion(currentQuestion);
//   } else {
//     showQuestion(currentQuestion);
//   }
// });

nextBtn.addEventListener("click", () => {
  radio.forEach((rad) => {
    if (rad.checked) {
      if (
        rad.nextElementSibling.textContent ==
        questions[currentQuestion].trueAnswer
      ) {
        marks++;
        // score.textContent = marks;
        currentQuestion++;
        rad.checked = false;
      } else {
        rad.checked = false;
        currentQuestion++;
      }
    }
  });
  showQuestion(currentQuestion);
});
