import React from 'react'
import './ColorList.css';

const ColorList = ({colors, handleRemoveColor}) => {
  return (
    <div className="color-list">
        { colors.map(color => (
            <div
                key={color.name}
                style={{"backgroundColor": `${color.color}`}}>
                <span
                    className='btn-icon-remove'
                    onClick={()=>handleRemoveColor(color.name)}>
                <i className="fas fa-times"></i>
                </span>
                <p>{color.color}</p>
                
          </div>
        ))}
    </div>
  )
}

export default ColorList