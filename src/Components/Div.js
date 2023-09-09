import React, { useEffect } from 'react'
import calc from '../calc'

function Div() {

  const [num1, setNum1] = React.useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setNum2] = React.useState(Math.floor(Math.random() * 10) + 1);

    const [answer, setAnswer] = React.useState(0);
    const [status, setStatus] = React.useState("");

    const handleChange = (e) => {
        setAnswer(parseInt(e.target.value));
    }
  
    const Check = () => {
        const result = calc("/", num1, num2, answer);
        setStatus(result);
        setTimeout(() => {
            if (result === "Correct!") {
              setNum1(Math.floor(Math.random() * 10) + 1);
              setAnswer(0);
            }
            setStatus("");
        }, 1000);
        
    }
  
  useEffect(() => {
    var num2 = Math.floor(Math.random() * 10) + 1;
    while (num2 >= num1) {
      num2 = Math.floor(Math.random() * 10) + 1;
    }
    setNum2(num2);
  }, [num1]);
  
  return (
    <>
          <h1 className='container'>{num1} / {num2}</h1>
          <input type="text" onChange={handleChange} onBlur={Check} value={answer}/>
          <h1 className='status' style={{color : status === "InCorrect!" ? 'red' : 'green'}}>{status}</h1>
    </>
  )
}

export default Div