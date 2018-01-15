// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
// import reducers from './reducers';
// let ReactI18nfiy = null;

// try {
//   ReactI18nfiy = require("react-i18nify"); //
// } catch (e) {
//   ReactI18nfiy = require("../build/index.js");
// }

const I18n = require("react-i18nify").I18n;

export const translationsObject = {
  en: {
    application: {
      title: "Awesome app with i18n!",
      hello: "Hello, %{name}!"
    },
    date: {
      long: "MMMM Do, YYYY"
    },
    export: "Export %{count} items",
    export_0: "Nothing to export",
    export_1: "Export %{count} item",
    two_lines: "Line 1<br />Line 2",
    literal_two_lines: "Line 1\
Line 2"
  },
  nl: {
    application: {
      title: "Toffe app met i18n!",
      hello: "Hallo, %{name}!"
    },
    date: {
      long: "D MMMM YYYY"
    },
    export: "Exporteer %{count} dingen",
    export_0: "Niks te exporteren",
    export_1: "Exporteer %{count} ding",
    two_lines: "Regel 1<br />Regel 2",
    literal_two_lines: "Regel 1\
Regel 2"
  }
};

I18n.setLocale("nl");

// export default translationsObject;

// const store =  createStore(
//   combineReducers({
//     ...reducers,
//     i18n: i18nReducer
//   }),
//   applyMiddleware(thunk)
// );
// syncTranslationWithStore(store)
// store.dispatch(loadTranslations(translationsObject));
// store.dispatch(setLocale('en'));
