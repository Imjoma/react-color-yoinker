import {React, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewPallete.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import ColorList from './ColorList';
// import { useHistory } from 'react-router-dom';
import NewPaletteForm from '../../components/NewPaletteForm'


const NewPallete = ({savePalette}) => {

const [hidden, setHidden] = useState(false)
const [max, setMax] = useState(false)
const [save, setSave] = useState(false)
const [modal, setModal] = useState('')
// const [name, setName] = useState('')
const [colors, setColors] = useState([])
// const history = useHistory()

const handleAddColor = (pickedColor) => {
    if(colors.length < 20){
        setColors([...colors, { name: uuidv4(), color: pickedColor }])
        setSave(true)
    }
    if(colors.length === 19){
        setMax(true)
    }
}

const handleRemoveColor = (id) => {
    if(colors.length === 1){
        setSave(false)
    }
    setColors(colors.filter(color => color.name !== id))
    setMax(false)
}

const handleModal = (initial='visible') => {
    setModal(initial)
}

// const handleSubmit = () => {    
//     // console.log({paletteName: name, id: uuidv4(), emoji: '😃',  colors});
//     savePalette({paletteName: name, id: uuidv4(), emoji: '😃',  colors});
//     history.push('/')
// }



  return (
      <>
      <div className={`modal ${modal}`}>
          <NewPaletteForm colors={colors} savePalette={savePalette} handleModal={handleModal}/>
      </div>
        <div className="pallete-page_nav">
            <Link className="btn-back_left" to="/">Back</Link>
            <div className='pallete-page_btn'>
                <div className="btn-icon dont-save"
                    onClick={()=>setHidden(!hidden)}
                ><i className="fas fa-times"></i></div>
                <div className="btn-name save"
                    style={{background: save ? '#5C03AA' : '#A18BB0',
                    pointerEvents: save ? 'all' : 'none'}}
                    onClick={()=>handleModal()}
                    // onClick={()=>handleSubmit()}
                >{save ? "Save Pallete" : "Empty Pallete"}</div>

            </div>
        </div>
        <div className="palette-create-field">
            <Sidebar 
                colors={colors}
                hidden={hidden}
                max={max}
                handleAddColor={handleAddColor}/> 
            <ColorList
                colors={colors}
                handleRemoveColor={handleRemoveColor}/>
        </div>
    </>
  )
}

export default NewPallete