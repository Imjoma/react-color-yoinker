import './App.css';
import React, { useState, useEffect} from 'react';
// npm install react-router-dom@5
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog'
import Designs from './Pages/Designs'
import NewPallete from './Pages/CreatePallete/NewPallete'
import PalletePage from './Pages/PalletePage'

import seedColors from './configs/seedColors';

function App() {

  // const customPalettes = JSON.parse(localStorage.getItem('palettes'));
  // // create a add palette to avoid null... remove seedColors
  // const [palettes, setPalettes] = useState(customPalettes || seedColors);

  const [palettes, setPalettes] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("palettes");
    const customPalettes = JSON.parse(saved);
    return customPalettes || "";
  });

  useEffect(() => {
    localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = id => {
    setPalettes(palettes.filter(palette => palette.id !== id))
    // alert(id)
  }


  return (
    <div className="App"> 
      <>
        <Router>
              <Route path='/' exact>  
                <Home
                  deletePalette={deletePalette}
                  seeds={palettes}
                />    
              </Route>
              <Route path='/Designs' component={Designs}></Route>
              <Route path='/Blog' component={Blog}></Route>
              <Route path='/new-pallete'>
                <NewPallete
                  savePalette={savePalette}
                /> 
              </Route>

              <Route path='/yoink/:id'>
                <PalletePage seeds={seedColors}/>
                <PalletePage seeds={palettes}/>
              </Route>
        </Router>
      </>
    </div>
  );
}

export default App;
