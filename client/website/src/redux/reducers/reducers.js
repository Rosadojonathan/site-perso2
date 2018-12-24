import {  AUTHENTICATED, LOGGEDIN, EXPIREDLOGGEDIN } from "../actions/actions";



function authenticateReducer(state, action){
    switch (action.type){
      case AUTHENTICATED:
        state = {
         ...state,
         token: action.payload
        }
        return state;     
      case LOGGEDIN:
        state = {
          ...state,
          loggedin: action.payload,
          expiredSession: !action.payload
        }
      return state;

      case EXPIREDLOGGEDIN:
      state = {
        ...state,
        loggedin: action.payload,
        expiredSession: !action.payload
      }
      
      default: 
        return state;
    }
  }

export default authenticateReducer;