import axios from 'axios'


export class ContactService{
    static  SERVICE_URL='http://localhost:9000/'
    static getAllContacts(){ 
        const data =  axios(this.SERVICE_URL)
        console.log(data);
     return data
}
}

