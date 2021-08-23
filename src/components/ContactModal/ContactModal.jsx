import React from 'react';
import { sendMessageApiCall } from '../../api/feedback';
import './ContactModal.scss';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactModal({onClose, onSend}){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('')

    const sendMessage = async () => {
        const response = await sendMessageApiCall(name, email, message)
        if(response) {
            onSend()
        } else {
            toast.error('😢 Ошибка отправки сообщения. Попробуйте позже', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                
        }
    }

    return (
        <div className={'modal-container'}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        <div className={'modal-div'}>
            <header>
                <p>Задайте вопрос</p>
                <img src="https://img.icons8.com/windows/96/ffffff/macos-close.png" onClick={onClose}/>
            </header>
            <div>
                <p></p>
                <input type={'text'} placeholder={'Имя'} value={name} onChange={e => setName(e.target.value)}/>
                <input type={'text'} placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)}/>
                <textarea rows={4} cols={100} placeholder={'Сообщение'} value={message} onChange={e => setMessage(e.target.value)}/>

                <div className={'button'} onClick={() => sendMessage()}>
                    <p>Отправить сообщение</p>
                </div>
            </div>
        </div>
        </div>
    )
}