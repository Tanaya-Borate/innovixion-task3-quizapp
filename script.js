const quizData = [
    {
      question: "1) What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "2) Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      correctAnswer: "Mars"
    },
    {
      question:"3) Who painted the famous artwork Mona Lisa?",
      options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question:"4) What is the largest ocean in the world?",
      options: [" Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
      correctAnswer: " Pacific Ocean"
    },
    {
      question:"5) Who wrote the play Romeo and Juliet?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question:"6) What is the capital city of Australia?",
      options: ["Melbourne", "Sydney", "Canberra", " Perth"],
      correctAnswer: "Canberra"
    },
    {
      question:"7) What is the chemical symbol for gold?",
      options: ["Au","Go","Gd","Gl"],
      correctAnswer: "Au"
    },
    {
      question:"8) Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: "Japan"
    },
    {
      question:"9) What is the tallest mountain in the world?",
      options: [" K2", "Mount Everest", " Mount Kilimanjaro", " Mount McKinley (Denali)"],
      correctAnswer: "Mount Everest"
    },
    {
      question:"10) Who was the first person to step on the moon?",
      options: [" Buzz Aldrin", " Neil Armstrong", " Yuri Gagarin", "Alan Shepard"],
      correctAnswer: " Neil Armstrong"
    },
   
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <h2>${currentQuizData.question}</h2>
      <ol>
        ${currentQuizData.options.map(option => `<li><button  onclick="checkAnswer('${option}')">${option}</button></li>`).join('')}
      </ol>
    `;
  }
  
  function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      displayQuiz();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length} questions.`;
  }
  
  displayQuiz();
  