import React from 'react';
import mission from '../../../assets/img/missionBlock/mission.png';
import history from '../../../assets/img/missionBlock/history.png';
import people from '../../../assets/img/missionBlock/people.png';
import focus from '../../../assets/img/missionBlock/focus.png';

import missionPhoto from '../../../assets/img/missionBlock/missionPhoto.jpg';
import historyPhoto from '../../../assets/img/missionBlock/historyPhoto.jpeg';
import peoplePhoto from '../../../assets/img/missionBlock/peoplePhoto.jpg';
import focusPhoto from '../../../assets/img/missionBlock/focusPhoto.jpg';

import './MissionBlock.scss';


export default function MissionBlock(){
    const [stage, setStage] = React.useState(0)
    const photos = [missionPhoto, historyPhoto, peoplePhoto, focusPhoto];

    return(
        <section class={'mission-block'}>
            <img src={photos[stage]} style={{width: '50vw', objectFit: 'cover'}} />
            <div className={'buttons-container'}>
                <div className={stage === 0 ? 'button active' : 'button'} onClick={() => setStage(0)}>
                    <img src={mission} style={{height: 50, width: 50}} />
                    <div>
                        <p className={'title'}>Наша миссия</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </div>
                <div className={stage === 1 ? 'button active' : 'button'} onClick={() => setStage(1)}>
                    <img src={history} style={{height: 50, width: 50}} />
                    <div>
                        <p className={'title'}>Наша история</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </div>
                <div className={stage === 2 ? 'button active' : 'button'} onClick={() => setStage(2)}>
                    <img src={people} style={{height: 50, width: 50}} />
                    <div>
                        <p className={'title'}>Наши люди</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </div>
                <div className={stage === 3 ? 'button active' : 'button'} onClick={() => setStage(3)}>
                    <img src={focus} style={{height: 50, width: 50}} />
                    <div>
                        <p className={'title'}>Наше внимание</p>
                        <p className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </div>
            </div>
        </section>
    )
}