import React from 'react'

import Nav from '../../container/Nav';
import Main from '../../container/Main';
// import Footer from '../../container/Footer';

const Home = ({seeds, deletePalette}) => {

    return (
        <div>
            <Nav/>
            <Main
            seeds={seeds}
            deletePalette={deletePalette}
            />
            {/* <Footer/> */}
        </div>
    )
}

export default Home
