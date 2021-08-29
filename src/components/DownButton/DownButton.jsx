import React from 'react';
import { isMobile } from 'react-device-detect';
import './DownButton.scss'


export default function DownButton(){
    return(
        <div className={'down-button'} style={{width: isMobile ? '60px' : '6vw', height: isMobile ? '60px' : '6vw', marginTop: isMobile ? '-30px' : '-3vw'}}>
            <img src="https://img.icons8.com/ios/90/ffffff/long-arrow-down.png"/>
        </div>
    )
}