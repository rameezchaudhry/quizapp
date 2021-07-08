import React from "react"
import { useSelector } from "react-redux"
import { useState } from "react";
import Result from "../component/result"

function Quiz() {
    const state = useSelector(state => state) //call redux
    const [index, setIndex] = useState(0) //index state for question number and setting arry index
    const [score, setScore] = useState(0) // for score

    var finalscore = () => { setScore(score + 1) }
    function scoreCalculate(opts) {
        const score = 0;
        if (opts == state.obj[index].answer) {
            finalscore()
        }

    }
    
    console.log(score);
    if(state.obj.length>index){
        return (
            <div className="main">
            <div>
            <div className="container col  rounded-top border border-top mt-5  w-50 align-self-center bg-warning">
                <h1 className="text-center text-white">Quiz</h1>
                <h4 className="text-center text-secondary">Question <span className="h2">{index + 1}</span>/{state.obj.length}</h4>
            </div>
            <div className="container col rounded-bottom border-bottom mt-0 pt-0 w-50 align-self-center bg-info">
                <h5 className="text-light p-3"><span className="font-weight-bold">Q No:{index + 1} </span>
                    {state.obj[index].Question} ?</h5>
                <div className="h5 container d-flex flex-wrap p-3 justify-content-evenly">
                    <div><button onClick={() => { setIndex(index + 1); scoreCalculate("opt1") }} className="option btn bg-dark text-light">{state.obj[index].option1}</button></div>
                    <div><button onClick={() => { setIndex(index + 1); scoreCalculate("opt2") }} className="option btn bg-dark text-light">{state.obj[index].option2}</button></div>
                    <div><button onClick={() => { setIndex(index + 1); scoreCalculate("opt3") }} className="option btn bg-dark text-light">{state.obj[index].option3}</button></div>
                    <div><button onClick={() => { setIndex(index + 1); scoreCalculate("opt4") }} className="option btn bg-dark text-light">{state.obj[index].option4}</button></div>
                </div>

                <div className="progress  mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: score * 100 }} aria-valuenow={score} aria-valuemin="0" aria-valuemax={state.obj.length}>Progress</div>
                </div>
            </div>
            </div>
        </div>    
    )
    } else{
        
      return  <Result score={score}  totalNum={state.obj.length} />
    }
    
}
export default Quiz;