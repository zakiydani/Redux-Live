import React from "react";
import { addCar, minCar } from "../Actions/counterActions";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      {/* <button onClick={() => addCar()}>+</button>
      <button onClick={() => minCar()}>-</button> */}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("object", props);
  return {
    // car: props.car,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: () => dispatch(addCar()),
    minCar: () => dispatch(minCar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
