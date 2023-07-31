import "./ResetBtn.css"

function ResetBtn({resetCountMethod}){
    return (
        <div>
            <button className="resetBtn" onClick={resetCountMethod}>Reset Button</button>
        </div>
    )
}

export default ResetBtn;