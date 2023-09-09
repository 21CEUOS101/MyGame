import React from 'react';
import calc from '../calc';

function Sum() {

    const [num1, setNum1] = React.useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setNum2] = React.useState(Math.floor(Math.random() * 10) + 1);

    const [answer, setAnswer] = React.useState(0);
    const [status, setStatus] = React.useState("");

    const handleChange = (e) => {
        setAnswer(parseInt(e.target.value));
    }

    
    const Check = () => {
        const result = calc("+", num1, num2, answer);
        setStatus(result);
        setTimeout(() => {
            if (result === "Correct!") {
                setNum1(Math.floor(Math.random() * 10) + 1);
                setNum2(Math.floor(Math.random() * 10) + 1);
                setAnswer(0);
            }
            setStatus("");
        }, 1000);
        
    }

  return (
      <>
          <h1 className='container'>{num1} + {num2}</h1>
          <input type="text" onChange={handleChange} onBlur={Check} value={answer}/>
          <h1 className='status' style={{color : status === "InCorrect!" ? 'red' : 'green'}}>{status}</h1>
      </>
  )
}

export default Sum