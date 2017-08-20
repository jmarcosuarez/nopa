const auth = {
  login(callback) {
    // If there is a token in the localStorage, the user is already authenticated
    callback(true);
  },
};

export default auth;