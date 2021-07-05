import React from "react"
import { useSelector } from "react-redux"
import update from "./action"
import { useState, useEffect } from "react";
function Quiz(prop)
{
    const state = useSelector(state => state)
    // let dispatch = useDispatch()
    // update(dispatch)

    return(
        <div className="main">

            <div className="container col  rounded-top border border-top mt-5  w-50 align-self-center bg-warning">
            <h1 className="text-center text-white">Quiz</h1>
            <h4 className="text-center text-secondary">Question <span className="h2">3</span>/3</h4>
            </div>
            <div className="container col rounded-bottom border-bottom mt-0 pt-0 w-50 align-self-center bg-info">
            <h5 className="text-light p-3"><span className="font-weight-bold">Q No:1 </span> 
            {console.log(state)}
            ?</h5>
            <div className="h5 container d-flex flex-wrap p-3 justify-content-evenly">
            <div ><button className="option btn bg-dark text-light">option1</button></div>
            <div ><button className="option btn bg-dark text-light">option2</button></div>
            <div ><button className="option btn bg-dark text-light">option3</button></div>
            <div ><button className="option btn bg-dark text-light">option4</button></div>
            </div>
     <div className="pb-3">
     <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
     </div>
            </div>
        </div>
    )
}
export default Quiz;