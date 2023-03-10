import { AUTHENTICATE, SET_PERSON, LOGOUT, SET_DID_TRY_AL } from "../actions/auth";

const initialState = {
   token: null,
   userId: null,
   didTryAutoLogin: false,
   user:[],
};

export default (state = initialState, action) => {
   switch (action.type) {
      case AUTHENTICATE:
         return {
            token: action.token,
            userId: action.userId,
            didTryAutoLogin: true
         };
      case SET_DID_TRY_AL:
         return {
            ...state,
            didTryAutoLogin: true
         }
      case LOGOUT:
         return {
            ...initialState,
            didTryAutoLogin: true
         };
      default:
         return state;
   }
}