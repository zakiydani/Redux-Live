import { ADD, MIN } from "../Actions/counterActions";

const initialState = {
  car: 0,
};

function counterReducers(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        car: state.car + 1,
      };
    case MIN:
      return {
        ...state,
        car: state.car - 1,
      };
  }
}

export default counterReducers;
