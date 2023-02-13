import React,{useState} from 'react'
import { links } from './Data'
import logo from '../assets/img/logo/logo.svg';
import ReactFlagsSelect from "react-flags-select";
import i18next from 'i18next';

const handleClick = (e) => {
  e.preventDefault()
  const target = e.target.getAttribute('href')
  const location = document.querySelector(target).offsetTop

  window.scrollTo({
    left: 0,
    top: location - 120,
  })
}

export default function Header({t}) {

  const [select, setSelect] = useState("FR");
  const onSelect = (code) => {
    console.log(code)
    setSelect(code)
    if(code == 'FR'){
      i18next.changeLanguage('fr')
    }else{
      i18next.changeLanguage('en')
    }
  };
  console.log("SELECT", select);
  return (
    <>
    {/* <Topbar/> */}
<header>
  <section className="py-4">
    <div className="naviagtion naviagtion-white fixed-top transition">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a className="navbar-brand p-0" href="#">
            <img src={logo} style={{ width: "163px" }} />
            {/* <img src="assets/images/logo/1.png" alt="Logo" width="163px"/> */}
            </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse text-center" id="navigation">
            
            <ul className="navbar-nav mx-auto">
               
          {links.map((link) => {
            return (
              <li className="nav-item">
                <a className="nav-link text-dark text-capitalize" href={link.url} key={link.id} onClick={handleClick}>
                  {t(link.text)}
                </a>
              </li>
            )
          })}
            </ul>

            <ReactFlagsSelect
              
              onSelect={onSelect}
              countries={["FR", "GB"]}
              selected={select}
              customLabels={{ GB: "EN", FR: "FR" }}
              
              /*showSelectedLabel={showSelectedLabel}
              selectedSize={selectedSize}
              showOptionLabel={showOptionLabel}
              optionsSize={optionsSize}
              placeholder={placeholder}
              searchable={searchable}
              searchPlaceholder={searchPlaceholder}
              alignOptionsToRight={alignOptionsToRight}
              fullWidth={fullWidth}
              disabled={disabled} */
            />
            <br />

            <div className="react-tel-input flag us"></div>

            {/* <button onClick={()=>{
              var scrollDiv = document.getElementById("loan").offsetTop;
              window.scrollTo({ top: scrollDiv - 50, behavior: 'smooth'});
            }} className="btn btn-outline-primary text-white ml-3">Apply Loan</button> */}

            {/* <Link to="/privacy-policy">Policy</Link> */}
          </div>
        </nav>
      </div>
    </div> 
  </section>
</header>
    </>
  )
}
