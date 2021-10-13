import axios from 'axios';

const api = axios.create({
    baseURL:'https://tt4i2b4huh.execute-api.us-east-1.amazonaws.com/default'
});

let confirmOtp = async (username, name, phoneNumber, oneTimePassword, company, sharePurchasedAtPrice, noOfSharesPurchased, desiredSharePrice) => {
    let res = await api.post('/confirmOtp', {
        headers:{
            'Content-Type': 'application/json'
        },
        username,
        name,
        phoneNumber,
        oneTimePassword,
        company,
        sharePurchasedAtPrice,
        noOfSharesPurchased,
        desiredSharePrice
    })
    return res;
}

export default confirmOtp;