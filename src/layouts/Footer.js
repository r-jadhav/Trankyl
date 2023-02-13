import React from 'react'
import logo from '../assets/img/logo/logo-wh.svg';
import { FaTiktok } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer({style,t}) {
  return (
    <>
    <footer style={style} className="bg-secondary">
    <section className="wide-40 border-bottom border-color">
      <div className="container">
        <div className="row justify-content-between text-center">
          <div className="col-md-12 mb-4 mb-md-0">
            <img src={logo} style={{ width: "163px"}} />
            <p className="text-light my-4" style={{width: "40%",margin: "auto"}}>{t('about')}</p>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="https://www.facebook.com/trankyl/" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="https://vm.tiktok.com/ZMYRkj1ht/" target="_blank"><i className="fa"><FaTiktok /></i></a></li>
              <li className="list-inline-item"><a href="https://www.youtube.com/@trankyl9686/videos" target="_blank"><i className="fa fa-youtube"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/trankyl_me/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <a href="tel:+228 90 80 91 91">
        <div className='stickyPhone'>
          <FaPhoneAlt className="icons" color="#fff" size={20}/>
        </div>
      </a>
    </section>
  
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="mb-0 text-light">Copyright &copy;
              <script>
                var CurrentYear = new Date().getFullYear()
                document.write(CurrentYear)
              </script>
              {t("rights")} <a href="#"> Trankyl</a></p>
          </div>
          <div className="col-md-6 text-md-right text-center">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-light">Terms and Conditions</a></li>
              <li className="list-inline-item">| &nbsp;<a href="#" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </footer>
    </>
  )
}
