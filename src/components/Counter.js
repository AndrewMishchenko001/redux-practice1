import React from "react";
import Controls from "./Controls";
import Value from "./Value";
import "./Counter.css";
// import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/actions";

export function Counter({ step, value, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (step) => dispatch(increment(step)),
    onDecrement: (step) => dispatch(decrement(step)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
