import React from 'react';
import './Pallete.css';
import { Link } from 'react-router-dom';

const Pallete =({seeds})=>{
    return (
        seeds.map((seed)=> (
            <div className="pallete" key={seed.id}>
                <Link to={'/yoink/' + seed.id}>
                    <div className="pallete-container">
                        <div className="colors">
                             {seed.colors.map(color =>(
                                 <div key={color.name} style={{"backgroundColor": `${color.color}`}}></div>
                             ))}
                        </div>
                        <div className="colors-info">
                             <div>{seed.paletteName}</div>
                             <div>{seed.emoji}</div>
                        </div>
                    </div>
                </Link>



            </div>
        ))
    )
    
}

export default Pallete
