function Result(prop) {
    let a;
    (prop.score/prop.totalNum)*100 >= 50?a="Pass":a="Fail";
    return (
    <div>
        <div className="container col  rounded-top border border-top mt-5  w-50 align-self-center bg-warning">
            <h1 className="text-center text-white">Quiz</h1>
            <h4 className="text-center text-secondary">Result</h4>
           

        </div>
        <div className="p-4 pt-4 container col rounded-bottom border-bottom mt-0 pt-0 w-50 align-self-center bg-info">
            <p className="h5 text-center text-light">Total Marks: {prop.totalNum}</p>
            <p className="h5 text-center text-light">Obtained Marks: {prop.score}</p>
    <p className="h5 text-center text-light">Remarks: {a}</p>
            <p className="h5 text-center text-light">Percentage: {(prop.score / prop.totalNum) * 100}%</p>

        </div >
    </div>
    )
}
export default Result;