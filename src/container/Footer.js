import React from 'react'
import './Footer.css';
import logo from '../assets/porfolio-logo.png';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container-footer">
                <div className="container-share">
                    <h4 className="footer-header">SHARE</h4>
                    <h4><a href="$">Get URL</a></h4>
                    <h4><a href="$">Share on Facebook</a></h4>
                    <h4><a href="$">Share on Twitter</a></h4>
                    <h4><a href="$">Share on LinkedIn</a></h4>
                </div>
                <div className="container-nav-links">
                    <h4 className="footer-header">LINKS</h4>
                    <h4><a href="$">Contact Me</a></h4>
                    <h4><a href="$">Pallete Entry</a></h4>
                    <h4><a href="$">Blog</a></h4>
                    <h4><a href="$">About</a></h4>
                </div>
                <div className="container-branding">
                    <h4 className="footer-header">BRANDING</h4>
                    <img src={logo} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Footer
