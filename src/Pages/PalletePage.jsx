
import {React, useState} from 'react';
import './PalletePage.css';

import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';

const PalletePage = ({seeds}) => {

    const [state, setState] = useState('')
    const [color, setColor] = useState('')
    const [label, setLabel] = useState('')

    const handleClick = (clickedColor)=> {
        setLabel(visibleStateLabel())
        setColor(clickedColor)
        setState('visible')
        setTimeout(()=>{
            setState('')
        }, 1000)
    }

    const visibleStateLabel = () => {
        const labelArr = ['YOINK!', 'PASTE ME!', "LET'S GO!", 'COPIED!'];
        const copiedLabel = Math.floor(Math.random() * labelArr.length);
        const visibleLabel = labelArr[copiedLabel];
        return visibleLabel
    }
    const { id } = useParams();
        return (
                
            seeds.filter(seed => seed.id === id).map((seed)=>(
                <div className="pallete-page" key={seed.id}>

                    {/* target this every color clicked */}
                    <div className={`color-show ${state}`}style={{"backgroundColor": `${color}`}}>
                        <h1>{label}</h1>                     
                        <h3>{color}</h3>
                    </div>

                    <div className="pallete-page_nav">
                        <Link className="btn-back_left" to="/">Back</Link>
                        {/* <div className="color-converter_center">converter</div> */}
                        {/* <div className="settings">Settings</div> */}
                    </div>

                    <div className="pallete-page_grid">
                            {seed.colors.map((color)=>(
                                <CopyToClipboard text={color.color} key={color.name}>
                                    <div
                                        onClick={()=>handleClick(color.color)}
                                        key={seed.id}
                                        style={{"backgroundColor": `${color.color}`}}>
                                            
                                        <h3>COPY</h3>
                                        <p>{color.color}</p>
                                    </div>                                
                                </CopyToClipboard> 
                                
                            ))}
                    </div>
                    
                    <div className="pallete-page_footer">
                        {seeds.filter(seed =>seed.id === id).map((seed)=>(
                            <div key={seed.id} className="made-by"> Made By: {seed.paletteName}</div>
                        ))}
                    </div>
                </div>  
            ))

          
        )
}

export default PalletePage;