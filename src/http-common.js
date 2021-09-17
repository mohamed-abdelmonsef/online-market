import axios from 'axios'
 export default axios.create({
     baseURL:"https://iti-api.herokuapp.com",
     headers:{
         "Content-type":"application/json"
     }
 })