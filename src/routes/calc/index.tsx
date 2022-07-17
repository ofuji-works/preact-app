import { h } from "preact";
import { useCounter } from "../../hooks";
import style from "./style.css";

const Calc = () => {
  const { count, increase, decrease } = useCounter();
  return (
    <div className={style.calc}>
      <button onClick={increase}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Calc;
