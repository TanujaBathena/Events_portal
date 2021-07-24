// All the state information about log in is stored in the exported object

class Auth {
  constructor() {
    console.log("running");
    this.authenticated = false; //initialising user authentication to false.
  }
  login() {
    this.authenticated = true; //initialising user authentication to true when he is logged in.
  }

  logout() {
    this.authenticated = false;//initialising user authentication to false when he is logged out.
  }
  isAuthenticated() {                       //checks if user is authenticated and returns true if authenticated...else returns false
    if (this.authenticated) return true;
    return false;
  }
}

export default new Auth();
