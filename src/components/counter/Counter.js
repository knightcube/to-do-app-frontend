import CounterBtn from "./CounterBtn";
import ResetBtn from "./ResetBtn";
import { useState } from "react";

function Counter(){
    // count is a variable that stores the 1st element of the array returned via useState(0)
    // setCount is a function that stores the 2nd element i.e a function that is returned via useState(0)
    // 0 is the default value that we are passing to useState
    // Using deconstruction to write easily mantainable code
    const [count, setCount] = useState(0);

    function incrementCounterParent(units){
        setCount(count+units)
    }

    function decrementCounterParent(units){
        setCount(count-units)
    }

    function resetCountMethod(){
        setCount(0)
    }

    return (
        <div>
            <span className="counterTxt">{count}</span>
            <CounterBtn units={1} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
            <CounterBtn units={2} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
            <CounterBtn units={5} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
            <ResetBtn resetCountMethod={resetCountMethod}/>
        </div>
    )
}

export default Counter;