import React, { useState, useEffect } from 'react';
import { elements } from "../../data/_data";
import ElementDetails from '../ElementDetails/ElementDetails';
import './periodicTableGame.css';

const AllElements = elements.elements;
const questionKeys = elements.questionKeys;

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
  const [answerInput, setAnswerInput] = useState('');
  const [mcQuestions, setMcQuestions] = useState({});
  const [showStartButton, setShowStartButton] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);
  const [score, setScore] = useState(0);

  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [correctAnswerDetails, setCorrectAnswerDetails] = useState({});


  const generateQuestions = () => {
    setShowCorrectAnswer(false);
    setShowStartButton(false);
    setIsCorrect(true);
    setAnswerInput('');
    setCorrectAnswerDetails({});

    const randNum = generateRandomNumbers(4);
    const ranAnswerIndex = shuffle();

    const questionObj = questionKey();
    let answerOptions = [];
    let questionDetails = '';

    for (const [index, value] of randNum.entries()) {
      if (index == ranAnswerIndex) {
        answerOptions.push({
          'answerText': AllElements[value][questionObj[0]],
          'isCorrect': true,
        })
        questionDetails = AllElements[value][questionObj[1]];
        setCorrectAnswerDetails(AllElements[value]);
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
    setMcQuestions(questions);
  };
  
  const resetInput = () => {
    var inputs = document.getElementsByTagName('input');

    for(var i = 0; i < inputs.length; i++) {
      inputs[i].checked=false
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (mcQuestions[0].answerOptions[answerInput].isCorrect) {
      setScore(score+1);
      setShowCorrectAnswer(!showCorrectAnswer);
    } else {
      setIsCorrect(false);
      setTimeout(() => {
        setIsCorrect(true);
      }, 1500);
    }
  };

  useEffect(() => {
    resetInput();
  }, [mcQuestions]);

  return (
    <div className='periodic_table-game-container'>
      {showStartButton && <button 
        className='start-button'
        onClick={generateQuestions}
        >Start</button>
      }
      <h3>Score: {score}</h3>
      <div className={`card ${showCorrectAnswer ? 'flip' : ''}`}>
        {
          Object.keys(mcQuestions).length !== 0 && (
          <div className='periodic_table-game-choice'>
            <p>{mcQuestions[0].question}</p>
            <p>{mcQuestions[0].questionDetails}</p>
              <form name='answerOptions'className="answer_div" onSubmit={handleFormSubmit}>
              {mcQuestions[0].answerOptions.map((answerOption, index) => (
                  <div className='periodic_table-game-choice-content'>
                    <input
                        id={index}
                        type="radio"
                        checked={index === answerInput}
                        onChange={() => setAnswerInput(index)}
                        value={answerOption.answerText}
                        name="answerOption"
                    />
                    {answerOption.answerText}
                  </div>
              ))}
              <input disabled={answerInput===''} className='submit_answer_button' type="submit" value="Submit" />
              <div className='game_message_content'>
                  {!isCorrect && <p>Not quite. Please try again!</p>}
              </div>
            </form>
          </div>
          )
        }
        <div className='answer_card'>
          <p>Correct!</p>
          {
            showCorrectAnswer && (
              <ElementDetails elementDetails={correctAnswerDetails}/>
            )
          }
          <button 
            className='next_question_button'
            onClick={generateQuestions}
            >Next</button>
        </div>
      </div>
    </div>
  );
}

export default PeriodicTableGame
