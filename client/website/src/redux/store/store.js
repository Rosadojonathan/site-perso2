import { combineReducers, createStore } from 'redux';
import authenticateReducer from '../reducers/reducers';

class StateLoader {

  loadState() {
      try {
          let serializedState = localStorage.getItem("https://jonathanrosado.fr:state");
          if (serializedState === null) {
              return this.initializeState();
          }

          return JSON.parse(serializedState);
      }
      catch (err) {
          console.log(`error, loggin error ${err}`)
          return this.initializeState();
      }
  }

  saveState(state) {
      try {
          let serializedState = JSON.stringify(state);
          localStorage.setItem("https://jonathanrosado.fr:state", serializedState);

      }
      catch (err) {
      }
  }

  initializeState() {
      return {
        authenticated: false
      }
      };
  }

export const stateLoader = new StateLoader();




export const store = createStore(authenticateReducer,stateLoader.loadState());



  