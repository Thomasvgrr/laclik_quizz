const questions = [
    {
        question: "Quel est le capitale de la France ?",
        reponses: ["Paris", "Londres", "Berlin", "Rome"],
        reponseCorrecte: 0
    },
    {
        question: "Quelle est la couleur du ciel ?",
        reponses: ["Bleu", "Vert", "Rouge", "Jaune"],
        reponseCorrecte: 0
    },
    {
        question: "Quel est le résultat de 2 + 2 ?",
        reponses: ["3", "4", "5", "6"],
        reponseCorrecte: 1
    }
];

let questionCourante = 0;
let score = 0;

function chargerQuestion() {
    if (questionCourante < questions.length) {
        const question = questions[questionCourante];
        document.getElementById("question").textContent = question.question;

        for (let i = 0; i < question.reponses.length; i++) {
            document.getElementById("btnReponse" + i).textContent = question.reponses[i];
        }

        questionCourante++;
    } else {
        finDuQuizz();
    }
}

function verifierReponse(index) {
    const question = questions[questionCourante - 1];
    if (index === question.reponseCorrecte) {
        score++;
    }
    document.getElementById("scoreValeur").textContent = score;
}

function finDuQuizz() {
    document.getElementById("question").textContent = "Fin du quizz ! Votre score est de " + score + " sur " + questions.length + ".";
    document.getElementById("reponses").style.display = "none";
    document.getElementById("score").style.display = "none";
}