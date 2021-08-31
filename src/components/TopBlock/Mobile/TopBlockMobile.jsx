import React from 'react';
import './TopBlockMobile.scss';

import green from '../../../assets/img/topBlock/green-slider.png'
import planctonic from '../../../assets/img/topBlock/planctonic.png'
import cup from '../../../assets/img/topBlock/cup.png'
import phone from '../../../assets/img/topBlock/phone.png'

export default function TopBlockMobile({showModal}){

    React.useEffect(() => {
        let text = document.getElementById('center-text')
        let greenSlider = document.getElementById('green-slider')
        let planctonic = document.getElementById('planctonic')
        let cup = document.getElementById('cup')
        let phone = document.getElementById('phone')
        window.addEventListener('scroll', function(){
            
            text.style.marginTop = window.scrollY * 0.7 + 'px'
            greenSlider.style.marginBottom = window.scrollY * 0.5 + 'px';
            planctonic.style.marginBottom = window.scrollY * 0.3 + 'px';
            cup.style.marginBottom = window.scrollY * 0.7 + 'px';
            phone.style.marginBottom = window.scrollY * 0.2 + 'px';
        })
    }, [])

    return (
        <section className={'topblock-div-mobile'}>
            <h2>Siberian Hub</h2>
            <div id='center-text' className="text-container mobile">
                <h3 className={'mobile'}>Мы создаём хорошие решения</h3>
                <p className={'description'}>Специализируемся на создании клиент-серверных систем: интернет-сайтов и мобильных приложений</p>
                <div className={'connect__button'} onClick={showModal}>
                    <p className={'connect__text'}>Связаться с нами</p>
                </div>
            </div>
            <img id='green-slider' src={green} className={'green-slider-mobile'} />
            <img id='planctonic' src={planctonic} className={'planctonic-mobile'} />
            <img id='cup' src={cup} className={'cup-mobile'} />
            <img id='phone'src={phone} className={'phone-mobile'} />
        </section>
    )
}