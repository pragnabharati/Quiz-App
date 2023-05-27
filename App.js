import React, { useState } from 'react';

export default function App() {
  const questions = [
           {
                    questionText: 'What command is used to create a backup configuration?',
                    answerOptions: [
                      {
                       answerText: 'copy running backup', isCorrect: false },
                      { answerText: 'copy running-config startup-config', isCorrect: true },
                      { answerText: 'config mem', isCorrect: false },
                      { answerText: 'wr mem', isCorrect: false },
          ],
        },
            {
              questionText: 'Which bowler bagged a hat trick in the 2022 edition?',
              answerOptions: [
                {
                  answerText: 'Sam Curran', isCorrect: false },
                { answerText: 'Yuzvendra CHahal', isCorrect: true },
                { answerText: 'Axar Patel', isCorrect: false },
                { answerText: 'Harshal Patel', isCorrect: false },
    ],
  },
       {
        questionText: 'Which of the following is a non metal that remains liquid at room temperature?',
        answerOptions: [
          {
            answerText: 'Phosphorous', isCorrect: false },
          { answerText: 'Chlorine', isCorrect: false },
          { answerText: 'Bromine', isCorrect: true },
          { answerText: 'Helium', isCorrect: false },
],
       },
    {
  questionText: 'How many times have Mumbai Indians and Chennai Super Kings clashed in an IPL final?',
  answerOptions: [
    {
      answerText: 'Three', isCorrect: false },
    { answerText: 'Five', isCorrect: false },
    { answerText: 'Two', isCorrect: false },
    { answerText: 'Four', isCorrect: true },
],
    },

{
  questionText: 'Which of the following metals forms an amalgam with other metals?',
  answerOptions: [
    {
      answerText: 'Tin', isCorrect: false },
    { answerText: 'Mercury', isCorrect: true },
    { answerText: 'Lead', isCorrect: false },
    { answerText: 'Zinc', isCorrect: false },
],
},


{
  questionText: 'Who is the only overseas player to win the Purple Cap twice in the IPL?',
  answerOptions: [
    {
      answerText: 'Imran Tahir', isCorrect: false },
    { answerText: 'Morne Morkel', isCorrect: false },
    { answerText: 'Kagiso Rabada', isCorrect: false },
    { answerText: 'Dwayne Bravo', isCorrect: true },
], 
},

{
  questionText: 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
  answerOptions: [
    {
      answerText: '20', isCorrect: false },
    { answerText: '22', isCorrect: true },
    { answerText: '23', isCorrect: false },
    { answerText: '26', isCorrect: false },
],  
},

{
  questionText: 'How long is an IPv6 address?',
  answerOptions: [
    {
      answerText: '32 bits', isCorrect: false },
    { answerText: '128 bytes', isCorrect: true },
    { answerText: '64 bits', isCorrect: false },
    { answerText: '128 bits', isCorrect: false },
],
},

{
  questionText: 'How many Harry Potter books are there?',
  answerOptions: [
    { answerText: '1', isCorrect: false },
    { answerText: '4', isCorrect: false },
    { answerText: '6', isCorrect: false },
    { answerText: '7', isCorrect: true },
  ],
},

  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },

  ];


       const [currentQuestion, setCurrentQuestion] = useState(0);
       const [showScore, setShowScore] = useState(false);
       const [score, setScore] = useState(0);

       const handleAnswerOptionClick = (isCorrect) => {
              if (isCorrect) {
                setScore(score +1 );
              }

              const nextQuestion = currentQuestion + 1;
              if (nextQuestion < questions.length) {
                    setCurrentQuestion(nextQuestion);
              } else {
                setShowScore(true);
              }
       };
       return (
        <div className='app'>
          {showScore ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
              </div>
          ) : (
            <>
               <div className='question-section'>
                <div className='question-count'>
                  <span>question
                    {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
               </div>
               <div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
        </div>
        </>
			)}
   </div>
	);
}   