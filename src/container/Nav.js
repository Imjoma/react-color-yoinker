import React from 'react'
import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link className="logo" to="/">COLOR YOINKER ;)</Link>
            <div className="nav-links">
           {/*   <Link className="links-padding" to="/blog">Blog</Link> */}
               {/* <Link className="links-padding" to="/designs">Designs</Link> */}
                <Link className="btn-name" to="/new-pallete">New Pallete</Link>
                {/* <div className="btn-icon"><i className="fas fa-bookmark"></i></div>
                <div className="btn-icon"><i className="fas fa-user"></i></div>
                <div className="btn-icon dark-mode"><i class="fas fa-moon"></i></div> */}
            </div>
        </nav>
    )
}

export default Nav
