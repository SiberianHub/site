import React from 'react';
import mysibsu from '../../../assets/img/ourWork/mysibsu.png';
import finanzio from '../../../assets/img/ourWork/finanzio.jpg';
import calendar from '../../../assets/img/ourWork/calendar.png';
import apteka from '../../../assets/img/ourWork/apteka.png';
import recommendation from '../../../assets/img/ourWork/recommendation.jpg';
import your from '../../../assets/img/ourWork/your.png';
import './OurWorkBlock.scss';


export default function OurWorkBlock(){
    return(
        <section className={'our-work-div'}>
            <div>
                <h3 className={'title'}>Мы гордимся нашей работой</h3>
                <p className={'description'}>Мы разрабатываем и поддерживаем веб-сайты и приложения, которые помогут вашему бизнесу. Заинтересовались? Давайте обсудим.</p>
            </div>
            <div className={'works-div'}>
                <div className={'works-div__big-block'}>
                    <img className={'my-sibsu'} src={mysibsu} alt={''}/>
                    <p className={'work-name'}>Мой СибГУ</p>
                    <p className={'work-description'}>Приложение Сибирского Государственного Университета науки и технологий имени академика М.Ф. Решетнёва</p>
                </div>
                <div className={'works-div__center-block'}>
                    <div className={'works-div__center-block__top'}>
                        <img className={'little-image'} src={recommendation} alt={''}/>
                        <p className={'work-name'}>Рекомендательный сервис</p>
                        <p className={'work-description'}>Чтобы узнать, куда сегодня сходить</p>
                    </div>
                    <div className={'works-div__center-block__bottom'}>
                        <img className={'little-image'} src={finanzio} alt={''}/>
                        <p className={'work-name'}>Finanzio</p>
                        <p className={'work-description'}>Новостная лента финансовых событий</p>
                    </div>
                </div>
                <div className={'works-div__right-block'}>
                    <div className={'works-div__right-block__top'}>
                        <div className={'works-div__right-block__top__div'}>
                            <img className={'little-image'} src={apteka} />
                            <p className={'work-name'}>Аптека Легко</p>
                            <p className={'work-description'}>Приложение интернет-аптеки</p>
                        </div>
                        <div className={'works-div__right-block__top__div'}>
                            <img className={'little-image'} src={your} />
                            <p className={'work-name'}>Ваш проект</p>
                            <p className={'work-description'}>Которым мы с радостью займемся</p>
                        </div>
                    </div>
                    <div className={'works-div__right-block__bottom'}>
                        <img className={'width-image'} src={calendar} />
                        <p className={'work-name'}>Календарь событий СибГУ</p>
                        <p className={'work-description'}>Все мероприятия в одном месте</p>
                    </div>
                </div>
            </div>
        </section>
    )
}