import axios from 'axios'

export default function Api(AUTH_TOKEN=""){
    return axios.create({
       baseUrl: `/api/`,
       headers : {
           "Authorization" : AUTH_TOKEN,
           "Content-Type" : 'application/json',
       }
   })    
}