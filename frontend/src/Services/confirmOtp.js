import axios from 'axios';

const api = axios.create({
    baseURL:'https://tt4i2b4huh.execute-api.us-east-1.amazonaws.com/default'
});

let confirmOtp = async (name, phoneNumber, oneTimePassword, company, sharePurchasedAtPrice, desiredSharePrice) => {
    let res = await api.post('/confirmOtp', {
        headers:{
            'Content-Type': 'application/json'
        },
        name,
        phoneNumber,
        oneTimePassword,
        company,
        sharePurchasedAtPrice: Number(sharePurchasedAtPrice),
        desiredSharePrice: Number(desiredSharePrice)
    })
    return res;
}

export default confirmOtp;