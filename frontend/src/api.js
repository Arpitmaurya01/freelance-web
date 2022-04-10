import axios from 'axios'

export default function Api(){
    const authToken = window.localStorage.getItem("token","");
    return axios.create({
       baseUrl: `/api/`,
       headers : {
           "Authorization" : authToken,
           "Content-Type" : 'application/json',
       }
   })    
}