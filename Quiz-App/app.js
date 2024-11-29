// Quiz Questions
const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HyperTransfer Markup Language",
        "Hyperlink and Text Markup Language",
      ],
      correct: 0, // Index of the correct answer
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correct: 0,
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 3,
    },
  ];
  
  // DOM Elements
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const resultContainer = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart");
  
  // Initialize Quiz
  function loadQuiz() {
    quizContainer.innerHTML = ""; // Clear previous content
    quizData.forEach((q, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
  
      // Add question text
      questionElement.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
  
      // Add options
      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("options");
      q.options.forEach((option, i) => {
        optionsContainer.innerHTML += `
          <label>
            <input type="radio" name="question${index}" value="${i}">
            ${option}
          </label>
        `;
      });
  
      questionElement.appendChild(optionsContainer);
      quizContainer.appendChild(questionElement);
    });
  }
  
  // Check Answers
  function calculateScore() {
    let score = 0;
  
    quizData.forEach((q, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedOption && parseInt(selectedOption.value) === q.correct) {
        score++;
      }
    });
  
    return score;
  }
  
  // Handle Submit Button Click
  submitButton.addEventListener("click", () => {
    const score = calculateScore();
    scoreElement.innerText = score;
    resultContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    submitButton.classList.add("hidden");
  });
  
  // Handle Restart Button Click
  restartButton.addEventListener("click", () => {
    loadQuiz();
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    submitButton.classList.remove("hidden");
  });
  
  // Load the Quiz on Page Load
  loadQuiz();
  