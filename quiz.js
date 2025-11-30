const quizQuestions = [
    {
        question: "What is 10 + 5?",
        answer: "15"
    },
    {
        question: "What is 20 - 8?",
        answer: "12"
    },
    {
        question: "What is 4 multiplied by 6?",
        answer: "24"
    },
    {
        question: "What is 30 divided by 5?",
        answer: "6"
    },
    {
        question: "What is the remainder when 17 is divided by 5?",
        answer: "2"
    }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
        
        let userAnswer = prompt(currentQuestion.question);

        if (userAnswer === null) {
            alert("Quiz interrupted. Displaying current score.");
            break; 
        }

        const userNormalized = userAnswer.toLowerCase().trim();
        const correctNormalized = currentQuestion.answer.toLowerCase().trim();

        if (userNormalized === correctNormalized) {
            score++;
            alert("Correct! Keep going.");
        } else {
            alert(`Wrong! The correct answer was: ${currentQuestion.answer}`);
        }
    }

    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}.`);
}

runQuiz();