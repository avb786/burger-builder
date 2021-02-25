import axios from "axios";



const instance =  axios.create({
    baseURL: 'https://buildmyburger-747b9-default-rtdb.firebaseio.com/'
})

export default instance;