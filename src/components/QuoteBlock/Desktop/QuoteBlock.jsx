import React from 'react';
import background from '../../../assets/img/missionBlock/missionPhoto.jpg';
import './QuoteBlock.scss';


export default function QuoteBlock(){


    return(
        <section className={'quote-block'}>
            <h2 className={'quote'}>Какая-то очень крутая и, желательно, длинная цитата про то, как классно делать что-то классное. Да и вообще должно цеплять</h2>
            <div className={'divider'} />
            <p className={'quote-author'}>Какой-то крутой чел</p>
            <img src={background} className={'background-image'} />
            <div className={'background-filter'} />
        </section>
    )
}