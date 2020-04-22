export const ADD = "ADD";
export const MIN = "MIN";

export function addCar() {
  return {
    type: ADD,
  };
}

export function minCar() {
  return {
    type: MIN,
  };
}
