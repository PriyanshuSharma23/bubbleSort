import { useEffect, useState } from 'react';
import './App.css';
import Graph from './graph';
import { arrayGenerator, arraySort } from './script';



function App() {
  const [inputNum, setInputNum] = useState<number | ''>('')

  const [numArray, setNumArray] = useState<Array<number[]>>(
    [
      [1, 9, 4, 8, 10, 1],
      [1, 4, 8, 9, 1, 10],
      [1, 4, 8, 1, 9, 10],
      [1, 4, 1, 8, 9, 10],
      [1, 1, 4, 8, 9, 10],
      [1, 1, 4, 8, 9, 10]
    ]
  );


  // const [isPaused, setIsPaused] = useState<boolean>(false);
  // const [totalAnimationTime, setTotalAnimationTime] = useState<number>(5000 / 5);
  const [iterationTrack, setIterationTrack] = useState<number>(0);




  // const play = () => {
  //   // setIsPaused(false)

  //   let timer = setInterval(() => { setIterationTrack(prev => prev + 1) }, totalAnimationTime / numArray.length)
  //   if (iterationTrack === numArray.length - 1)
  //     clearInterval(timer)

  // }

  // const stop = () => {
  //   // clearInterval()
  //   setIsPaused(true);
  // }

  useEffect(() => {
    if (iterationTrack === numArray.length - 1) setIterationTrack(0)
  }, [iterationTrack])

  // useEffect(() => {
  //   setTotalAnimationTime(5000 / numArray.length)
  // }, [numArray])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputNum) { alert("Please enter a num"); return }
    const arrayGen = arrayGenerator(1, 110, inputNum);
    const newNumArray = arraySort(arrayGen);
    setNumArray(newNumArray);
    setIterationTrack(0)
    setInputNum('');
  }

  return (
    <div className="App">

      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input
          type="number"
          value={inputNum}
          placeholder="Number of Bars"
          min={3}
          max={2000}
          onChange={(e) => { setInputNum(parseInt(e.target.value)) }}
        />
        <button>Generate Random Bars</button>
      </form>
      <div>{iterationTrack + 1}/{numArray.length - 1}</div>
      <Graph numArray={numArray[iterationTrack]} />
      <div className="buttons">
        <button
          onClick={() => { setIterationTrack(0) }}
        >
          Start
        </button>

        <button
          onClick={() => {
            setIterationTrack(prev => prev ? prev - 1 : prev)
          }}
        >Previous</button>

        {/* <button
          onClick={play}
        >
          ▶
        </button>
        <button
          onClick={play}
        >
          ⏸
        </button> */}

        <button
          onClick={() => {
            setIterationTrack(prev => prev === numArray.length - 1 ? prev : prev + 1)
          }}
        >Next</button>
        <button
          onClick={() => { setIterationTrack(numArray.length - 2) }}
        >
          End
        </button>
      </div>
    </div>
  );
}

export default App;
