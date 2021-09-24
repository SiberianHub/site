import React from 'react';
import background from '../../../assets/img/missionBlock/missionPhoto.jpg';
import './QuoteBlock.scss';


export default function QuoteBlock(){


    return(
        <section className={'quote-block'}>
            <h2 className={'quote'}>Совершенство складывается из мелочей. А совершенство это уже не мелочи!</h2>
            <div className={'divider'} />
            <p className={'quote-author'}>Микеланджело Буонарроти</p>
            <img src={background} className={'background-image'} />
            <div className={'background-filter'} />
        </section>
    )
}