import { useEffect, useReducer } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './style.css'

export const PrimeNumberN = () => {
    const inputNumber = useRef(null);
    const [primeNumberArr, setPrimeNumberArr] = useState([]);
    const [enteredNumber, setEnteredNumber] = useState('N');

    const initialState = {
        isRunning: false,
        time: 0,
      };
      // state => newState 
      const reducer = (state, action) => {
          switch (action.type) {
            case "start":
              return { ...state, isRunning: true };
            case "stop":
              return { ...state, isRunning: false };
            case "reset":
              return { isRunning: false, time: 0 };
            case "tick":
              return { ...state, time: state.time + 1 };
            default:
              throw new Error();
          }
      }
      const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      if (!state.isRunning) return;
  
      const interval = setInterval(() => dispatch({ type: "tick" }), 1000);
      return () => {
        clearInterval(interval);
      };
    }, [state.isRunning]);
    
    const memoValue = useMemo(()=>{
        let arr = [];
        for(let i = 3; i<=enteredNumber;i+=2){
            let isPrime = false;
            for(let j = 3 ; j<=i/2;j+=2){
                if(i % j == 0){
                    isPrime = true;
                    break;
                }
            }
            if(isPrime == false && enteredNumber!=1){
                arr.push(i);
            }
        }
        return arr;
    },[enteredNumber]);
    
    return (
        <>
        <div>
        <h1>{state.time}s</h1>
          <button onClick={() => dispatch({ type: "start" })}>Start</button>
          <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div className='line'></div>
        <div>
            <h1>Your number:</h1>
            <input type="number" ref={inputNumber}/>
            <button onClick={()=>setEnteredNumber(inputNumber.current.value)}> Submit </button>
            <p>Your array 1 to {enteredNumber}: <br/> {memoValue.map((el)=><>{el} </>)}</p>
        </div>
        </>
    );
}