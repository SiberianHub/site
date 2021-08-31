import React from 'react';
import './TopBlock.scss';

import green from '../../../assets/img/topBlock/green-slider.png'
import planctonic from '../../../assets/img/topBlock/planctonic.png'
import cup from '../../../assets/img/topBlock/cup.png'
import watch from '../../../assets/img/topBlock/watch.png'
import phone from '../../../assets/img/topBlock/phone.png'

export default function TopBlock({showModal}){

    React.useEffect(() => {
        let text = document.getElementById('center-text')
        let greenSlider = document.getElementById('green-slider')
        let planctonic = document.getElementById('planctonic')
        let cup = document.getElementById('cup')
        let watch = document.getElementById('watch')
        let phone = document.getElementById('phone')
        window.addEventListener('scroll', function(){
            
            text.style.marginTop = window.scrollY * 0.7 + 'px'
            greenSlider.style.marginBottom = window.scrollY * 0.5 + 'px';
            planctonic.style.marginBottom = window.scrollY * 0.3 + 'px';
            cup.style.marginBottom = window.scrollY * 0.7 + 'px';
            watch.style.marginBottom = window.scrollY * 0.5 + 'px';
            phone.style.marginBottom = window.scrollY * 0.2 + 'px';
        })
    }, [])

    return (
        <section className={'topblock-div'}>
            <h2>Siberian Hub</h2>
            <div id='center-text' className="text-container">
                <h3>Мы создаём хорошие решения</h3>
                <p className={'description'}>Специализируемся на создании клиент-серверных систем: интернет-сайтов и мобильных приложений</p>
                <div className={'connect__button'} onClick={showModal}>
                    <p className={'connect__text'}>Связаться с нами</p>
                </div>
            </div>
            <img id='green-slider' src={green} className={'green-slider-desktop'} />
            <img id='planctonic' src={planctonic} className={'planctonic-desktop'} />
            <img id='cup' src={cup} className={'cup-desktop'} />
            <img id='watch' src={watch} className={'watch-desktop'} />
            <img id='phone' src={phone} className={'phone-desktop'} />
        </section>
    )
}