import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './NewPaletteForm.css';


const NewPaletteForm = ({savePalette , colors, handleModal}) => {

const [name, setName] = useState('')
const history = useHistory()

const handleSubmit = (e) => { 
    e.preventDefault()   
    // console.log({paletteName: name, id: uuidv4(), emoji: '😃',  colors});
    savePalette({paletteName: name, id: uuidv4(), emoji: '😃',  colors});
    history.push('/')
}

    return (
<>
        <form onSubmit={(e)=>handleSubmit(e)} className="form-modal">
            <p className='form-label'>Name your Palette :</p>
            <input className='palette-name' type="text" value={name} placeholder='Palette Name' onChange={(e)=>setName(e.target.value)} />
            <div className="form-btn">
                <div onClick={()=>handleModal('')}className='dont-save btn-submit'><i className="fas fa-times"></i></div>
                <button type='submit' className='btn-submit'>Save</button>
            </div>
          
        </form>
        {/* <div className="preview-color">
           {colors.map((color, idx) => (
               <div key={idx}>{color}</div>
           ))} 
        </div> */}
        </>

    )


}

export default NewPaletteForm