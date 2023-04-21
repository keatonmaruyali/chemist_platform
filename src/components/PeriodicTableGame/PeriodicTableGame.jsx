import React, { useState, useEffect } from 'react';
import './periodicTableGame.css';

import { elements } from "../../data/_data";

const AllElements = elements.elements;
const questionKeys = elements.questionKeys;
console.log(questionKeys);

const generateRandomNumbers = (times) => {
  const randoms = []

  for (let i = 0; i < times; i++) {
    randoms.push(Math.floor(Math.random() * (117 - 0) + 0))
  }
  return randoms
};

const shuffle = () => {
  let array = [0, 1, 2, 3]
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  } 
  return array[1];
};

const questionKey = () => {
  let questionsObjLen = Object.keys(questionKeys).length;
  let questionIndex = Math.floor(Math.random() * (questionsObjLen - 0))
  return [questionKeys[questionIndex].answer, questionKeys[questionIndex].question]
};

const PeriodicTableGame = () => {
  const [answer, setAnswer] = useState('');
  const [mcQ, setMcQ] = useState({});
  const [showStart, setShowStart] = useState(true);
  const [correct, setCorrect] = useState(true);
  const [score, setScore] = useState(0);

  const generateQuestions = () => {
    setShowStart(false);
    setCorrect(true);
    setAnswer('');

    const randNum = generateRandomNumbers(4);
    const ranIndex = shuffle();

    const questionObj = questionKey();
    let answerOptions = [];
    let questionDetails = '';

    for (const [index, value] of randNum.entries()) {
      if (index == ranIndex) {
        answerOptions.push({
          'answerText': AllElements[value][questionObj[0]],
          'isCorrect': true,
        })
        questionDetails = AllElements[value][questionObj[1]];
      } else {
        answerOptions.push({
          'answerText': AllElements[value][questionObj[0]],
          'isCorrect': false,
        })
      }
    };
  
    var questions = [
      {
        'question': `What is the ${questionObj[0]} of the compound with this ${questionObj[1]}?`,
        'questionDetails': questionDetails,
        'answerOptions': answerOptions,
      }
    ];
    setMcQ(questions);
  };
  
  const resetInput = () => {
    var inputs = document.getElementsByTagName('input');

    for(var i = 0; i < inputs.length; i++) {
      inputs[i].checked=false
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (mcQ[0].answerOptions[answer].isCorrect) {
      setScore(score+1);
      generateQuestions();
    } else {
      setCorrect(false);
    }
  };

  useEffect(() => {
    resetInput();
  }, [mcQ]);

  return (
    <div>
      {showStart && <button 
        className='start-button'
        onClick={generateQuestions}
        >Start</button>
      }
      {
        Object.keys(mcQ).length !== 0 && (
        <div className='periodic_table-game'>
        <h3>Score: {score}</h3>
        <p>{mcQ[0].question} - {mcQ[0].questionDetails}</p>
            <form name='answerOptions'className="answer_div" onSubmit={handleFormSubmit}>
            {mcQ[0].answerOptions.map((answerOption, index) => (
                <div>
                <input
                    id={index}
                    type="radio"
                    checked={index === answer}
                    onChange={() => setAnswer(index)}
                    value={answerOption.answerText}
                    name="answerOption"
                />
                {answerOption.answerText}
                </div>
            ))}
            <input disabled={answer===''} className='game-button' type="submit" value="Submit" />
            <div className='game_message_content'>
                {!correct && <p>Not quite. Please try again!</p>}
            </div>
          </form>
        </div>
        )
      }
    </div>
  );
}

export default PeriodicTableGame
