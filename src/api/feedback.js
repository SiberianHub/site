import axios from 'axios';

export const sendMessageApiCall = async (name, email, text) => {
    try {
        await axios.post('https://mail.siberian-hub.ru/sendmail/', {name: name, email: email, text: text});

        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
}