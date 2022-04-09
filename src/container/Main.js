
import React from 'react';
import './Main.css';
import seedColors from '../configs/seedColors';

import Pallete from './Pallete';
import CustomPalette from './CustomPalette';

const Main = ({seeds, deletePalette}) => {

    return (
        <main>
            {/* search through color wiht filter (all, ...colors)*/}
            <input className='search-filter' type="text" placeholder='Search anything to yoink'/>
            <section>
                <div className="container-grid-most">
                {seeds &&  <CustomPalette seeds={seeds} deletePalette={deletePalette}/>}
                </div>
            </section>
            <section className="coming-soon">
                <div className="text-center">
                    <h4>What do you want to see here</h4>
                </div>
            </section>
            <section className="pallete-stack">
                <div className="container-grid">
                    <Pallete seeds={seedColors}/>
                </div>
            </section>

            <section className="ask-me">
                <div className="text-center share-your-art">
                    <h4>Share your work</h4>
                </div>
            </section>
            {/* don't mind this for now */}
            {/* <section className="projects">
                <div className="flex-row">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section> */}
        </main>     
    )
}

export default Main
