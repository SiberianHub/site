import React from 'react';
import './TeamBlockMobile.scss';
import teamInfo from '../teamInfo'

export default function TeamBlockMobile(){
    return(
        <section className={'team-div-mobile'}>
                <h3 className={'team-title'}>Лучшая команда из доступных</h3>
                <p className={'team-description'}>Мы понимаем, что вам нужно, и готовы дать это вам</p>}
            <div className={'buttons-div-mobile'}>
                {teamInfo.map(item => {
                    return(
                        <div className={'button'}>
                            <div>
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <h6>{item.name}</h6>
                            <p>{item.speciality}</p>
                            <div className={'card-cover'}>
                                <p className={'teammate-name'}>{item.name}</p>
                                <p className={'teammate-description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                <div className={'contacts'}>
                                    <a href={item.vk} target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/vk-circled--v1.png"/></a>
                                    <a href={item.telegram} target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/telegram-app.png"/></a>
                                    <a href={item.github} target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/github--v1.png"/></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}