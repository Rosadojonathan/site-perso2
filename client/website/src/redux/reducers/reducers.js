import {  AUTHENTICATED } from "../actions/actions";



function authenticateReducer(state, action){
    switch (action.type){
      case AUTHENTICATED:
        state = {
         ...state,
         authenticated: action.payload
        }
        return state;
      default: 
        return state;
    }
  }

export default authenticateReducer;