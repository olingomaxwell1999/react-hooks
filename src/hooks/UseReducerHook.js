import { useReducer } from "react";
import '../app.css';

function UseReducerHook() {
    //reducer takes two thins that is the action and the state. in tha action a payload can be included as shown in lines 11 and 25 thus if you click on the minus button its gonna deduct the value that was added for the payload on line 25.
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "substract":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="state-container">
      <div className="title">
            <h1>useEffect Hook</h1>
      </div>  
      <div className="buttons">
            <button onClick={() => dispatch({ type: "substract", payload: 5 })}>
        -
            </button>
            <span>{state}</span>
            <button onClick={() => dispatch({ type: "add" })}>+</button>
      </div>
    </div>
  );
}

export default UseReducerHook;