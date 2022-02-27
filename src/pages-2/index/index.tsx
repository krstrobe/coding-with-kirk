import React, { useState, useEffect } from 'react';

function Zumba() {
  const [answer, setAnswer] = useState<number>();

  // const answerState = useState(0);
  // const answer2 = answerState[0];
  // const setAnswer2 = answerState[1];

  const [resultMessage, setResultMessage] = useState(
    'Guess the number, please'
  );

  useEffect(() => {
    const answerLocal = Math.round(Math.random() * 1000);
    setAnswer(answerLocal);
    console.log('answer', answerLocal);
    // return () => {
    //   console.log('bye');
    // };
  }, []);

  const onChange = (event) => {
    const guess = Number(event.target.value);

    if (guess > answer) {
      setResultMessage('Good try, but your guess is too high. Try again.');
    } else if (guess < answer) {
      setResultMessage('Good try, but your guess is too low. Try again.');
    } else if (guess === answer) {
      setResultMessage('Congratulations!  You guessed it, broseph!');
    }
  };

  return (
    <div>
      <input onChange={onChange} />
      <h1>{resultMessage}</h1>
    </div>
  );
}

export default Zumba;
