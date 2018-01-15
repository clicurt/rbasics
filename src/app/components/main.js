import React from "react";
import { Translate } from "react-redux-i18n";
import { Localize, setLocale } from "react-redux-i18n";
const I18n = require("react-i18nify").I18n;
import store from "../store";

export const Main = props => {
  return (
    <div>
      <h1>
        <Translate value="application.title" /> <br />
        {I18n.t("application.title")}
      </h1>
      <button onClick={() => store.dispatch(setLocale("en"))}>Eng</button>
      <button onClick={() => store.dispatch(setLocale("nl"))}>Dutch</button>

      <button
        onClick={() => props.changeUsername()}
        className="btn btn-primary"
      >
        Change the username
      </button>
      <div>
        {/* <input onChange={(event) => event.target.value} type="text" value={(event) => event.target.value} placeholder="enter name here..."/> */}
      </div>
    </div>
  );
};
