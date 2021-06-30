const questions = [
    {question: 'Horses Colic Because...',
    answers: [
        {text: 'They cannot burp', correct: false},
        {text: 'They cannot regurgitate', correct: false},
        {text: 'Both', correct: true}
    ]},
    {question: 'The Original Horse was Called...',
    answers: [
        {text: 'Equisaurus', correct: false },
        {text: 'Eohippus', correct: true},
        {text: 'Phorusrhacos', correct: false}
    ]},
    {question: 'The Withers is the...',
    answers: [
        {text:'The area between the ears', correct: false},
        {text: 'The highest point of the horses back', correct: true},
        {text: 'A horses ankle', correct: false}
    ]},
    {question: 'What does it mean when a horse is piebald?',
    answers: [
        {text: 'It is black and white', corrrect: true},
        {text: 'It is blad', correct: false},
        {text: 'It has a white mark on its face', correct: false}
    ]},
    {question: 'How many teeth do horse have?',
    answers: [
        {text: '42', correct: false},
        {text: '32', correct: false},
        {text: '40', correct: true}

    ]}
]    


const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    console.log('started')
};
