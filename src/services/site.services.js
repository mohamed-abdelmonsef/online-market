import http from '../http-common';

class Services {
    getAll(){
        return http.get('/product')
    }

    addUser(newUser){
        return http.post('/register',newUser)
    }

    checkUser(inpEmail){
        return http.post('/login',inpEmail)
    }
}

export default new Services();