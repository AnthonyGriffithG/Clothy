export const signIn = (id) => {
  console.log(id);
  return {
    type: 'SIGN_IN',
    payload: id,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
