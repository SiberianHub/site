import React from 'react';
import './TeamBlock.scss';

import development from '../../../assets/img/motivationBlock/development.jpg'
import design from '../../../assets/img/motivationBlock/design.jpg'
import management from '../../../assets/img/motivationBlock/management.jpg'
import teamInfo from '../teamInfo'

import Anton from '../../../assets/img/teamBlock/Anton.jpg'
import Nikita from '../../../assets/img/teamBlock/Nikita.jpg'
import Artyom from '../../../assets/img/teamBlock/Artyom.jpg'
import Kirill from '../../../assets/img/teamBlock/Kirill.jpeg'

export default function TeamBlock(){
    return(
        <section className={'team-div'}>
            <div>
                <h3 className={'team-title'}>Лучшая команда из доступных</h3>
                <p className={'team-description'}>Мы понимаем, что вам нужно, и готово дать это вам</p>
            </div>
            <div className={'buttons-div'}>
                {teamInfo.map(item => {
                    return(
                        <div className={'button'}>
                            <div>
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <h6>{item.name}</h6>
                            <p>{item.speciality}</p>
                            <div className={'card-cover'}>
                                <p className={'name'}>{item.name}</p>
                                <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                <div className={'contacts'}>
                                    <a href={item.vk} target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/vk-circled--v1.png"/></a>
                                    <a href={item.telegram} target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/telegram-app.png"/></a>
                                    <a href={item.github} target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/github--v1.png"/></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <div className={'button'}>
                    <div>
                        <img src={Anton}/>
                    </div>
                    <h6>Абрамов Антон</h6>
                    <p>Backend-разработчик</p>
                    <div className={'card-cover'}>
                        <p className={'name'}></p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <div className={'contacts'}>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/vk-circled--v1.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/telegram-app.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/github--v1.png"/></a>
                        </div>
                    </div>
                </div>
                <div className={'button'}>
                    <div>
                        <img src={Kirill}/>
                    </div>
                    <h6>Миль Кирилл</h6>
                    <p>Backend-разработчик</p>
                    <div className={'card-cover'}>
                        <p className={'name'}>Храмушин Никита</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                        <div className={'contacts'}>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/vk-circled--v1.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/telegram-app.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/github--v1.png"/></a>
                        </div>
                    </div>
                </div>
                <div className={'button'}>
                    <div>
                        <img src={Nikita}/>
                    </div>
                    <h6>Храмушин Никита</h6>
                    <p>Frontend-разработчик</p>
                    <div className={'card-cover'}>
                        <p className={'name'}>Храмушин Никита</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                        <div className={'contacts'}>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/vk-circled--v1.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/telegram-app.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/github--v1.png"/></a>
                        </div>
                    </div>
                </div>
                <div className={'button'}>
                    <div>
                        <img src={Artyom}/>
                    </div>
                    <h6>Рылов Артём</h6>
                    <p>Мобильный разработчик</p>
                    <div className={'card-cover'}>
                        <p className={'name'}>Храмушин Никита</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                        <div className={'contacts'}>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/vk-circled--v1.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/telegram-app.png"/></a>
                            <a href="https://t.me/dualism98" target="_blank"><img src="https://img.icons8.com/ios/70/ffffff/github--v1.png"/></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}