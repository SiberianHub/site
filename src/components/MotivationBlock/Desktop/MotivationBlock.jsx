import React from 'react';
import './MotivationBlock.scss';

import development from '../../../assets/img/motivationBlock/development.jpg'
import design from '../../../assets/img/motivationBlock/design.jpg'
import management from '../../../assets/img/motivationBlock/management.jpg'

export default function MotivationBlock(){
    return(
        <section className={'motivation-div'}>
            <div>
                <h3 className={'motivation-title'}>Самая трудная часть старта - это начало</h3>
                <p className={'motivation-description'}>Давайте вместе начнём создавать что-то по-настоящему классное</p>
            </div>
            <div className={'buttons-div'}>
                <div className={'button'}>
                    <div>
                        <img src={development}/>
                    </div>
                    <h6>Разработка</h6>
                    <p>Создание сервисов согласно вашим требованиям</p>
                </div>
                <div className={'button'}>
                    <div>
                        <img src={design}/>
                    </div>
                    <h6>Помощь в дизайне</h6>
                    <p>Мы поможем доработать ваши дизайн-проекты для лучшего пользовательского опыта</p>
                </div>
                <div className={'button'}>
                    <div>
                        <img src={management}/>
                    </div>
                    <h6>Сопровождение</h6>
                    <p>Мы всегда будем рядом, чтобы помочь вам</p>
                </div>
            </div>
        </section>
    )
}