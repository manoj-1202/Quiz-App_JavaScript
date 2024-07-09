// Questions 

const questions = [
  {
    question:
      "1. Which method is used to add one or more elements to the end of an array?",
    options: ["shift()", "pop()", "push()", "unshift()"],
    correct: "push()",
  },
  {
    question:
      "2. What will be the output of the following code?\nlet arr = [1, 2, 3, 4, 5];\narr.splice(2, 1);\nconsole.log(arr);",
    options: ["[1, 2, 4, 5]", "[1, 2, 3, 5]", "[1, 2, 5]", "[1, 2, 3, 4, 5]"],
    correct: "[1, 2, 4, 5]",
  },
  {
    question:
      "3. Which of the following is a correct way to create an object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = Object.create();",
      "let obj = new Object();",
      "Both A and C",
    ],
    correct: "Both A and C",
  },
  {
    question: "4. What does the Array.prototype.map() method do in JavaScript?",
    options: [
      "Modifies the original array",
      "Creates a new array with the results of calling a provided function on every element",
      "Returns the first element of the array",
      "Adds elements to the beginning of an array",
    ],
    correct:
      "Creates a new array with the results of calling a provided function on every element",
  },
  {
    question:
      "5. How do you check if a variable is of type 'object' in JavaScript?",
    options: [
      "typeof variable === 'object'",
      "variable instanceof Object",
      "Both A and B",
      "None of the above",
    ],
    correct: "Both A and B",
  },
  {
    question:
      "6. What will be the output of the following code?\nlet x = 10;\nfunction foo() {\n  console.log(x);\n  let x = 20;\n}\nfoo();",
    options: ["10", "20", "undefined", "ReferenceError"],
    correct: "ReferenceError",
  },
  {
    question: "7. How do you convert a string to lowercase in JavaScript?",
    options: [
      "str.lower()",
      "str.toLowerCase()",
      "str.toLower()",
      "str.caseLower()",
    ],
    correct: "str.toLowerCase()",
  },
  {
    question:
      "8. Which method is used to add one or more elements to the beginning of an array?",
    options: ["shift()", "unshift()", "push()", "pop()"],
    correct: "unshift()",
  },
  {
    question: "9. What is the result of 3 + 2 + '7' in JavaScript?",
    options: ["57", "12", "327", "52"],
    correct: "57",
  },
  {
    question: "10. What is the output of typeof null in JavaScript?",
    options: ["object", "null", "undefined", "number"],
    correct: "object",
  },
];

//setting a index value as 0

let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalTime = 10;

//stating a app
function startQuiz() {
  showQuestion(currentQuestionIndex);  
  startTimer();
}
// getting a html to js by getElementById
function showQuestion(index) {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");


  feedback.textContent = "";         //empty feedback by staring 
  nextButton.style.display = "none";  // hiding a next btn by starting

// for first quesiton 
  const question = questions[index];
  questionContainer.textContent = question.question;
  optionsContainer.innerHTML = "";

  // Replacing a ques and ans using forEach method
  question.options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });
}
//for checking a ans wheather its crt or not
function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");

  // checking using if-else method
  if (selectedOption === question.correct) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    //Alet ,msg
    alert("Correct answer! Well done!");
  } else {
    feedback.textContent = "Incorrect!";
    feedback.style.color = "red";
  }

  document.getElementById("score").textContent = score;
  nextButton.style.display = "block";

  stopTimer();  // for stoping a timer for every questions
} 

// for next questions 
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
    resetTimer();
    startTimer();
  } else {
    showResult();
  }
}
// Result 
function showResult() {
  const questionContainer = document.getElementById("question-container");
  const feedback = document.getElementById("feedback");
  const timerContainer = document.getElementById("timer-container");
  const nextButton = document.getElementById("next-button");

  questionContainer.style.display = "none";
  feedback.textContent = `Quiz over! Your score is ${score}`;
  timerContainer.style.display = "none";
  nextButton.style.display = "none";
}

//  setting timing for each question and setting intetrval 

function startTimer() {
  let timeLeft = totalTime;
  const timerElement = document.getElementById("timer");

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer("");
      nextQuestion();
    }
  }, 1000);
}

// Resetting a time for each question
function resetTimer() {
  clearInterval(timer);
  document.getElementById("timer").textContent = totalTime;
}

// stoping a timing
function stopTimer() {
  clearInterval(timer);
}

startQuiz();  //returing a quiz app
