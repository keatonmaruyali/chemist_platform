import React, { useState, useEffect } from 'react';
import './periodicTableGame.css';

import { elements } from "../../data/_data";


const generateRandomNumbers = (times) => {
    const randoms = []

    for (let i = 0; i < times; i++) {
        randoms.push(Math.floor(Math.random() * (118 - 0) + 0))
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

const PeriodicTableGame = () => {
  const [answer, setAnswer] = useState('');
  const [mcQ, setMcQ] = useState({});
  const [showStart, setShowStart] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [correct, setCorrect] = useState(false);

  const generateQuestions = () => {
    setShowStart(false);
    setShowPopUp(false);
    setCorrect(false);
    setAnswer('');
    const randNum = generateRandomNumbers(4);
    const ranIndex = shuffle();

    let answerOptions = []
    let questionDetails = '';

    for (const [index, value] of randNum.entries()) {
      if (index == ranIndex) {
          answerOptions.push({
              'answerText': elements[value].name,
              'isCorrect': true,
          })
          questionDetails = elements[value].symbol;
      } else {
          answerOptions.push({
              'answerText': elements[value].name,
              'isCorrect': false,
          })
      }
    };
  
    var questions = [
      {
          'question': 'What is the name of the compound with this symbol?',
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
    console.log('Checking answers... ', mcQ[0].answerOptions[answer].isCorrect);
    if (mcQ[0].answerOptions[answer].isCorrect) {
        console.log('Right Answer');
        setCorrect(true);
        generateQuestions();
    } else {
        console.log('Wrong answer!');
        setShowPopUp(true);
    }
  };

  useEffect(() => {
    console.log('New MCQ: ', mcQ);
    resetInput();
  }, [mcQ]);

  return (
    <div>
        <h2>Game</h2>
        {
            showStart && <button className='start-button' onClick={generateQuestions}>Start</button>
        }
        {
            Object.keys(mcQ).length !== 0 && (
            <div className='periodic_table-game'>
                <p>
                    {mcQ[0].question} - {mcQ[0].questionDetails}
                </p>
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
            </div>)
        }
    </div>
  );
}

export default PeriodicTableGame
