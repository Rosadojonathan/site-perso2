import {  AUTHENTICATED, LOGGEDIN } from "../actions/actions";



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
          loggedin: action.payload
        }
      return state;
      
      default: 
        return state;
    }
  }

export default authenticateReducer;