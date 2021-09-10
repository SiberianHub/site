import React from 'react';
import { sendMessageApiCall } from '../../../api/feedback';
import { ToastContainer, toast } from 'react-toastify';
import background from '../../../assets/img/contactUs/background.jpg'
import './ContactUsBlock.scss';


export default function ContactUsBlock({showModal}){
    const [email, setEmail] = React.useState('');
    const [fetching, setFetching] = React.useState(false);

    const sendEmailAddress = async (e) => {
        setFetching(true);
        e.preventDefault();
        await sendMessageApiCall('', email, '');
        setEmail('');
        showModal();
        setFetching(false);
    }

    return(
        <section className={'ContactUsBlock'}>
            <p className={'title'}>Свяжитесь с нами</p>
            <p className={'description'}>Оставьте свой контактный Email-адрес, и мы вскоре свяжемся с вами для обсуждения вашего проекта</p>
            <form onSubmit={sendEmailAddress} className={'form'}>
                <input type={'text'} className={'textInput'} placeholder={'Ваш Email-адрес'} value={email} onChange={e => setEmail(e.target.value)} />
                {fetching ? <input type={'button'} className={'button'} value={'Отправка..'} style={{backgroundColor: 'gray'}} />
                :
                <input type={'submit'} className={'button'} onClick={sendEmailAddress} value={'Отправить'} />}
            </form>
            <img src={background} className={'background'} />
        </section>
    )
}
