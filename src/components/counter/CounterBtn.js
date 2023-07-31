import "./CounterBtn.css";
import PropTypes from 'prop-types';

function CounterBtn({units, incrementMethod, decrementMethod}){

    // count is a variable that stores the 1st element of the array returned via useState(0)
    // setCount is a function that stores the 2nd element i.e a function that is returned via useState(0)
    // 0 is the default value that we are passing to useState
    // Using deconstruction to write easily mantainable code
    // const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        incrementMethod(units);
    }

    function decrementCounterFunction(){
        decrementMethod(units);
    }

    return (
        <div className="Counter">
            <div>
                <button className="countBtn"
                        onClick={decrementCounterFunction}
                >-{units}</button>
                
                <button className="countBtn" 
                        onClick={incrementCounterFunction}
                
                >+{units}</button>
                
            </div>

        </div>
    )
}

CounterBtn.propTypes = {
    units: PropTypes.number
}

CounterBtn.defaultProps = {
    units: 1
}

export default CounterBtn;