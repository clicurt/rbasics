
 Create a i18n folder to and put en.js, tr.js and index.js inside of it
 en.js
 export const en = {
    application: {
      name: 'Name Surname',
      company: 'Company',
      blog: 'Website',
      location: 'Location',
      email: 'Email Address',
      created_at: 'Account Create Date',
      desc:'%{name} on Github'
    },
    date: {
      long: 'MMMM Do, YYYY'
    }
    
  };

 tr.js
 export const tr = {
    application: {
      name: 'Ad Soyad',
      company: 'Şirket',
      blog: 'Web Sayfası',
      location: 'Lokasyon',
      email: 'Email',
      created_at: 'Hesap Açılış Tarihi',
      desc:'Github\'ta %{name}'
    },
    date: {
      long: 'DD.MM.YYYY'
    }
  };

index.js
import { tr } from './tr';
import { en } from './en';
export const translationsObject = {
    tr: tr,
    en: en
};

store.js
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import { translationsObject } from '../i18n/index.js';//⛄🌨❄ 

export default function configureStore(initialState) {

  const finalCreateStore = compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    window.devToolsExtension ? window.devToolsExtension() : f => f

  )(createStore);


  const store = finalCreateStore(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  localStorage.getItem('appLang') ? null : localStorage.setItem('appLang', 'tr');
  store.dispatch(setLocale(localStorage.getItem('appLang')));
  return store;
}


en.js
{
  app: {
    modifyMyProfile: 'Modify My Profile '
  }
}

fr.js
{
  app: {
    modifyMyProfile: 'Something in French'
  }
}

index.js
import { fr } from './fr';
import { en } from './en';
export const translations = {
    fr: fr,
    en: en
};


<span>{this.props.i18n.translations[this.props.i18n.locale].app.modifyMyProfile}</span>

...
const mapStateToProps = (state) => {
    return { 
        i18n: state.i18n
    };
};
export default connect(mapStateToProps, null)(Component);