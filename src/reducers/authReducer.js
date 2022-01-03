const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  imgUrl: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.id,
        imgUrl: action.payload.imgUrl,
      };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false, userId: null, imgUrl: null };
    default:
      return state;
  }
};

export default authReducer;
