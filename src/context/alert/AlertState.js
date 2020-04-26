import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => clearAlert(), 5000);
  };

  const clearAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        clearAlert: clearAlert,
        setAlert: setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
