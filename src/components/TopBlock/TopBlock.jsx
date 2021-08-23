import React from 'react';
import './TopBlock.scss';
import {BrowserView} from 'react-device-detect'

import green from '../../assets/img/green-slider.png'
import planctonic from '../../assets/img/planctonic.png'
import cup from '../../assets/img/cup.png'
import watch from '../../assets/img/watch.png'
import phone from '../../assets/img/phone.png'

export default function TopBlock({showModal}){

    return (
        <>
            <BrowserView>
                <section className={'topblock-div'}>
                    <h2>Siberian Hub</h2>
                    <div className="text-container">
                        <h3>Мы создаём хорошие решения</h3>
                        <p className={'description'}>Специализируемся на создании клиент-серверных систем: интернет-сайтов и мобильных приложений</p>
                        <div className={'connect__button'} onClick={showModal}>
                            <p className={'connect__text'}>Связаться с нами</p>
                        </div>
                    </div>

                    <img src={green} className={'green-slider'} />
                    <img src={planctonic} className={'planctonic'} />
                    <img src={cup} className={'cup'} />
                    <img src={watch} className={'watch'} />
                    <img src={phone} className={'phone'} />
                </section>
            </BrowserView>
        </>
    )
}