import axios from 'axios'

class Auth{
    constructor(){
        console.log("running")
        this.authenticated=false;
    }
    login(){
        this.authenticated=true;
    }

    logout(){
        this.authenticated=false;
    }
    isAuthenticated(){
        if(this.authenticated) return true;
        return false;
    }
}

export default new Auth();