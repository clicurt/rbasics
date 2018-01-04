import { setTimeout } from "timers";

export const setName = (name) => {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: "SET_NAME",
  //       payload: name
  //     })
  //   }, 2000)
  // };
  return {
    type: "SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  }
}

export const setAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age
  };
}