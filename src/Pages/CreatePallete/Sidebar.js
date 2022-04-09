import {React, useState} from 'react';
import { ChromePicker } from 'react-color';
import './Sidebar.css';

const Sidebar = ({handleAddColor, max, hidden, colors}) => {
  const [color, setColor] = useState('#5C03AA')

    return (
      
      <div className="sidebar"
        style={{ transform: `${hidden ? "translateX(-100%)" : "translateX(0)"}`}}>
        <div className='sidebar-content'>
          <div className="new-pallete-info">
            Make your<br></br>own
            <span style={{ color: `${color}`}}> Palette</span>
            <div style={{background: `${color}`}}></div>
          </div>
              <ChromePicker
                className='chromepicker'
                width= '100%'
                color={ color }
                onChange={updatedColor => setColor(updatedColor.hex)}
              />
              
              <div
                className="btn-name add"
                style={{background: max ? '#A18BB0' : '#5C03AA',
                        pointerEvents: max? 'none' : 'all'}}
                onClick={()=>handleAddColor(color)}
                >
                {max ? "Max. 20 Colors" : "Add Color"}
              </div>
              <div
                className="btn-name remove"
                >
                 Remove Color
              </div>
        </div>
        </div>
    );
  }
export default Sidebar;