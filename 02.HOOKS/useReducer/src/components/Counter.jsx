import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState); // ✅ Fixed "dispatch"
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const incrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue(0);
  };

  const decrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +inputValue });
    setInputValue(0);
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={incrementByAmount}>ADD</button>
        <button onClick={decrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;