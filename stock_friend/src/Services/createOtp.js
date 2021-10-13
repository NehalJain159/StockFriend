import axios from 'axios';

const api = axios.create({
    baseURL:'https://tt4i2b4huh.execute-api.us-east-1.amazonaws.com/default'
});

let createOtp = async (username, phoneNumber) => {
    let res = await api.post('/createOtp', {
        headers:{
            'Content-Type': 'application/json'
        },
        username,
        phoneNumber
    })
    return res;
}

export default createOtp;