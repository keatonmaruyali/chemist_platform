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
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array[1];
};

const PeriodicTableGame = () => {
  const [answer, setAnswer] = useState('');
  const [mcQ, setMcQ] = useState({});

  const generateQuestions = () => {
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
  }
  
  const resetInput = () => {
    var inputs = document.getElementsByTagName('input');

    for(var i = 0; i < inputs.length; i++) {
        inputs[i].checked=false
        }
    }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Checking answers... ', mcQ[0].answerOptions[answer].isCorrect);
    if (mcQ[0].answerOptions[answer].isCorrect) {
        console.log('Right Answer');
        generateQuestions();
    } else {
        console.log('Wrong answer!');
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
            Object.keys(mcQ).length !== 0 && (
            <div>
                {mcQ[0].question} - {mcQ[0].questionDetails}
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
                    <input type="submit" value="Submit" />
                </form>
            </div>)
        }
        <button onClick={generateQuestions}>Start</button>
    </div>
  );
}

export default PeriodicTableGame
