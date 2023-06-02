import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../context/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Diminuir</button>
      <button onClick={() => dispatch(reset())}>Resetar</button>
    </div>
  );
}

export default Counter;
