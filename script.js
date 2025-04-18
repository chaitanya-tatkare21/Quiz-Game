const quizData = [
    {
      question: "what is longest river in the world?",
      options: ["The Amazon River", "The Congo River", "The Nile River", " The Roe River"],
      answer: "The Nile River"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Saturn", "Mars", "Venus"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Vincent Van Gogh", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },

    {
      question: "The concept of gravity was discovered by which famous physicist?",
      options: ["Archimedes of Syracuse", "Sir Isaac Newton", "Albert Einstein", "Sir C.V. Raman"],
      answer: "Sir Isaac Newton"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    resultEl.textContent = "";
  
    currentQuestion.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(btn, option);
      optionsEl.appendChild(btn);
    });
  
    nextBtn.style.display = "none";
  }
  
  function selectAnswer(button, selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    const buttons = optionsEl.querySelectorAll("button");
  
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      } else if (btn.textContent === selectedOption) {
        btn.classList.add("wrong");
      }
    });
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.textContent = `You scored ${score} out of ${quizData.length}! 🎉`;
  }
  
  // Start quiz
  showQuestion();
  