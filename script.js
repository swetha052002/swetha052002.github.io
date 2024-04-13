const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const feedbackContainer = document.getElementById('feedback-container');
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "What is the smallest continent by land area?",
    choices: ["Asia", "Europe", "Australia", "Antarctica"],
    answer: "Australia"
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the rarest blood type?",
    choices: ["A", "B", "AB", "O"],
    answer: "AB"
  },
  {
    question: "What is the square root of 144?",
    choices: ["10", "12", "14", "16"],
    answer: "12"
  },
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    choices: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean current?",
    choices: ["Gulf Stream", "Antarctic Circumpolar Current", "Kuroshio Current", "Labrador Current"],
    answer: "Antarctic Circumpolar Current"
  },
  {
    question: "What is the smallest bird in the world?",
    choices: ["Hummingbird", "Sparrow", "Finch", "Warbler"],
    answer: "Hummingbird"
  },
  {
    question: "What is the chemical symbol for sodium?",
    choices: ["Na", "Si", "Cl", "K"],
    answer: "Na"
  },
  {
    question: "Which is the only mammal that can fly?",
    choices: ["Bat", "Bird", "Squirrel", "Kangaroo"],
    answer: "Bat"
  },
  {
    question: "What is the largest bone in the human body?",
    choices: ["Femur", "Tibia", "Humerus", "Skull"],
    answer: "Femur"
  },
  {
    question: "What is the fastest land animal?",
    choices: ["Cheetah", "Lion", "Gazelle", "Wildebeest"],
    answer: "Cheetah"
  },
  {
    question: "What is the main gas that makes up the Earth's atmosphere?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Nitrogen"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Diamond", "Corundum", "Topaz", "Quartz"],
    answer: "Diamond"
  },
  {
    question: "What is the smallest planet in our solar system?",
    choices: ["Earth", "Mars", "Mercury", "Venus"],
    answer: "Mercury"
  },
  {
    question: "What is the tallest mammal on Earth?",
    choices: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
    answer: "Giraffe"
  },
  {
    question: "What is the largest rainforest on Earth?",
    choices: ["Amazon Rainforest", "Congo Rainforest", "Southeast Asian Rainforest", "Australian Rainforest"],
    answer: "Amazon Rainforest"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  } 
];

let score = 0;

function buildQuiz() {
  questions.forEach((currentQuestion, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const header = document.createElement('h2');
    header.textContent = `Question ${index + 1}:`;
    questionElement.appendChild(header);

    const choicesContainer = document.createElement('div');
    choicesContainer.classList.add('choices');

    currentQuestion.choices.forEach((choice, choiceIndex) => {
      const choiceElement = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question${index}`;
      radio.value = choice;
      choiceElement.appendChild(radio);
      choiceElement.appendChild(document.createTextNode(choice));
      choicesContainer.appendChild(choiceElement);
    });

    questionElement.appendChild(choicesContainer);
    quizContainer.appendChild(questionElement);
  });
}

document.getElementById('submit-button').addEventListener('click', function() {
  const answerContainers = quizContainer.getElementsByClassName('choices');

  questions.forEach((currentQuestion, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.answer){
      score++;
      answerContainers[index].style.color = 'green';
    }
    else{
      answerContainers[index].style.color = 'red';
    }
  });

  scoreContainer.innerHTML = `Score: ${score} out of ${questions.length}`;
});

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

buildQuiz();