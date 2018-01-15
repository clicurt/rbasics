import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer
} from "react-redux-i18n";
import { createLogger } from "redux-logger";
import reducer from "./reducers/";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { translationsObject } from "./reducers/i18n";

const middleware = applyMiddleware(createLogger(), thunk, promise());
const store = createStore(reducer, {}, middleware);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale("en"));
export default store;
