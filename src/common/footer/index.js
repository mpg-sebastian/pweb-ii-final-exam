import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import '../../styles/footer.css';

function Footer() {
  return (
    <>
      <div className="footer-navigation container w-100 d-flex justify-content-between align-items-center">
          <div className="fn-left">
            <ul className="fn-left-list d-flex">
              <li className="fn-left-items">
                <Link to="/">About</Link>
              </li>
              <li className="fn-left-items">
                <Link to="/">Services</Link>
              </li>
              <li className="fn-left-items">
                <Link to="/">Pricing plans</Link>
              </li>
              <li className="fn-left-items">
                <Link to="/">Privacy</Link>
              </li>
              <li className="fn-left-items">
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="fn-right">
            <ul className="fn-right-list d-flex">
              <li className="fn-right-items">
                <Link to="/"><FaFacebookF /></Link>
              </li>
              <li className="fn-right-items">
                <Link to="/"><FaTwitter /></Link>
              </li>
              <li className="fn-right-items">
                <Link to="/"><FaInstagram /></Link>
              </li>
              <li className="fn-right-items">
                <Link to="/"><FaGooglePlusG /></Link>
              </li>
              <li className="fn-right-items">
                <Link to="/"><FaLinkedinIn /></Link>
              </li>
            </ul>
          </div>
      </div>
      <footer className="footer d-flex justify-content-center align-items-center">
        <div className="footer-content container">
          <div className="footer-content-row row">
            <div className="footer-widget col-sm-3">
              <div className="footer-brand pb-4">
                <img src="https://www.vivatheme.com/wp-content/themes/viva/core/assets/images/logo.svg" alt="Logo" />
              </div>
              <div className="w-100">
                <p className="text-brand">
                  We like working with positive<br/>folks and taking an optimistic<br/>approach to challenges.
                </p>
              </div>
            </div>
            <div className="footer-widget col-sm-2">
              <h3 className='widget-title'>About</h3>
              <div className="widget-nav-menu">
                <ul className='nav-menu'>
                  <li className="nav-items">
                    <Link to="/">About Viva</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/">Plans & Pricing</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-widget col-sm-2">
            <h3 className='widget-title'>Resources</h3>
              <div className="widget-nav-menu">
                <ul className='nav-menu'>
                  <li className="nav-items">
                    <Link to="/">Support center</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/">Documentation</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/">Changelog</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="footer-widget col-sm-3">
              <h3 className="widget-title">Subscribe to Our Newletter</h3>
              <div className="w-100">
                <span className='widget-form-fake w-100'>
                  <span className='widget-placeholder'>Ingresa tu correo</span>
                  <span className='widget-btn'>SUBSCRIBETE</span>
                </span>
              </div>
              <div className="widget-apps-links w-100">
                <input type="checkbox" />
                <span className="widget-title">I agree to my email being stored and used to receive the newsletter.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="content container d-flex justify-content-center align-items-center h-100">
          <div className="c-left w-50 d-flex flex-column justify-content-center align-items-start">
            <div className="">
              <p className="text-dark">&copy; {new Date().getFullYear()} <span className='text-secondary'>Sebastian Silva.</span> Todos los derechos reservados.</p>
            </div>
          </div>
          <div className="c-right w-50 d-flex flex-column justify-content-center align-items-end">
            <div className="">
              <span className="text-secondary me-5">Terms of Use</span>
              <span className="text-secondary">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer