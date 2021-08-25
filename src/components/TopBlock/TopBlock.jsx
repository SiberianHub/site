import React from 'react';
import './TopBlock.scss';
import {BrowserView} from 'react-device-detect'

import green from '../../assets/img/green-slider.png'
import planctonic from '../../assets/img/planctonic.png'
import cup from '../../assets/img/cup.png'
import watch from '../../assets/img/watch.png'
import phone from '../../assets/img/phone.png'

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
            // text.style.opacity = 1 - window.scrollY * 0.005;
            // console.log(text.style.opacity)
        })
    }, [])

    return (
        <>
            <BrowserView>
                <section className={'topblock-div'}>
                    <h2>Siberian Hub</h2>
                    <div id='center-text' className="text-container">
                        <h3>Мы создаём хорошие решения</h3>
                        <p className={'description'}>Специализируемся на создании клиент-серверных систем: интернет-сайтов и мобильных приложений</p>
                        <div className={'connect__button'} onClick={showModal}>
                            <p className={'connect__text'}>Связаться с нами</p>
                        </div>
                    </div>

                    <img id='green-slider' src={green} className={'green-slider'} />
                    <img id='planctonic' src={planctonic} className={'planctonic'} />
                    <img id='cup' src={cup} className={'cup'} />
                    <img id='watch' src={watch} className={'watch'} />
                    <img id='phone'src={phone} className={'phone'} />
                </section>
            </BrowserView>
        </>
    )
}