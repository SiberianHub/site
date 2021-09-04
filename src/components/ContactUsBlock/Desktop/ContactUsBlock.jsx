import React from 'react';
import background from '../../../assets/img/contactUs/background.jpg'
import './ContactUsBlock.scss';


export default function ContactUsBlock(){
    const [email, setEmail] = React.useState('');

    const sendEmailAddress = (e) => {
        e.preventDefault();
        //....
    }

    return(
        <section className={'ContactUsBlock'}>
            <p className={'title'}>Свяжитесь с нами</p>
            <p className={'description'}>Оставьте свой контактный Email-адрес, и мы вскоре свяжемся с вами для обсуждения вашего проекта</p>
            <form onSubmit={sendEmailAddress} className={'form'}>
                <input type={'text'} className={'textInput'} placeholder={'Ваш Email-адрес'} value={email} onChange={e => setEmail(e.target.value)} />
                <input type={'submit'} className={'button'} onClick={sendEmailAddress} value={'Отправить'} />
            </form>
            <img src={background} className={'background'} />
        </section>
    )
}
