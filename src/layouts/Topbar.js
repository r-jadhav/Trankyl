import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false)
	// const handleToggle = () => {
	// 	setNavbarOpen(prev => !prev)
	//   }

	  const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	  }

	  const closeMenu = () => {
		setNavbarOpen(false)
	  }
  return (
	
    <>
			<header id="header-2" class="header ">

			    <div class="wsmobileheader clearfix navBar">

				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose style={{ color: "#fff", width: "30px", height: "30px" }} />
					) : (
						<FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
					)}
					</button>


					<nav className=" clearfix">
        					<ul class="wsmenu-list" className={`menuNav ${navbarOpen ? " showMenu" : ""}`} >

					        	<li aria-haspopup="true">
									<NavLink to="/" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>Home</NavLink>	
					          	</li>
								<li>
									<NavLink to="/about-us" className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>About Us</NavLink>
								</li>
								<li>
									<NavLink to="/courses" className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>Courses</NavLink>
								</li>
								<li>
									<NavLink to="/service-charges" className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>Service Charges</NavLink>
								</li>
								<li>
									<NavLink to="/treatments" className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>Treatments</NavLink>
								</li>
								<li>
									<NavLink to="/gallery" className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>Gallery</NavLink>
								</li>
								<li>
									<NavLink to="/contact-us" className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact>Contact Us</NavLink>
								</li>
							    {/* <li class="nl-simple header-btn" aria-haspopup="true"><a class="blue-hover" href="timetable.html">Our Doctors Timetable</a></li>  */}


        					</ul>

        				</nav>

			    	{/* <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a> */}
			    	<span className="smllogo"><img src="images/logo-dental.png" width="50" alt="mobile-logo"/></span>
			    	<a href="tel:123456789" className="callusbtn"><i class="fas fa-phone"></i></a>
			 	</div>

			 	<div className="hero-widget clearfix">
			 		<div className="container">
			 			<div className="row d-flex align-items-center">

		    				<div className="col-md-5 col-xl-6">
		    					<div className="desktoplogo"><a href="#hero-7"><img src="images/logo-dental.png"  width="100px" alt="header-logo" /></a></div>
		    				</div>

				     	
						    <div className="col-md-7 col-xl-6">
						    	<div className="row">

						    
						    		<div className="col-md-6">
						    			<div className="header-widget icon-xs">
						    				<span className="flaticon-039-emergency-call-1 blue-color"></span>
							    			<div className="header-widget-txt">
								    			<p>Emergency Cases</p> 
												<p className="header-widget-phone steelblue-color"><a href="tel:07314266699">07314266699</a></p>
											</div>
						    			</div>
						    		</div>

						    	
						    		<div className="col-md-6">
						    			<div className="header-widget icon-xs">
						    				<span className="flaticon-092-clock blue-color"></span>
							    			<div className="header-widget-txt">
								    			<p className="txt-400">Mon – Sat: - 10:00 AM - 6:30 PM</p>
								    			<p className="lightgrey-color">Sun : - Closed</p>
								    		</div>
						    			</div>
						    		</div>

{/* 						    	
						    		<div class="col-md-6">
						    			<div class="header-widget icon-xs">
						    				<span class="flaticon-021-hospital-9 blue-color"></span>
							    			<div class="header-widget-txt">
								    			<p class="txt-400">121 King Street, Melbourne,</p> 
												<p class="lightgrey-color">Victoria 3000 Australia</p>
											</div>
						    			</div>
						    		</div>  */}

						    	</div>
					      	</div>

				      	</div>
				    </div>
			  	</div>	


			  	<div className="wsmainfull menu clearfix">
    				<div className="wsmainwp clearfix">

    					<div className="desktoplogo"><a href="#hero-7"><img src="images/logo-dental.png"  width="180" height="40" alt="header-logo" /></a></div>

      					<nav className="wsmenu clearfix">
        					<ul className="wsmenu-list">

					        	<li aria-haspopup="true">
									<NavLink to="/" activeClassName="active-link">Home</NavLink>	
					          	</li>
								<li>
									<NavLink to="/about-us" className="navbar-link home-link" >About Us</NavLink>
								</li>
								<li>
									<NavLink to="/courses" className="navbar-link home-link" >Courses</NavLink>
								</li>
								<li>
									<NavLink to="/service-charges" className="navbar-link home-link" >Service Charges</NavLink>
								</li>
								<li>
									<NavLink to="/treatments" className="navbar-link home-link" >Treatments</NavLink>
								</li>
								<li>
									<NavLink to="/gallery" className="navbar-link home-link" >Gallery</NavLink>
								</li>
								<li>
									<NavLink to="/contact-us" className="navbar-link home-link" >Contact Us</NavLink>
								</li>
							    <li class="nl-simple header-btn" aria-haspopup="true"><a class="blue-hover" href="timetable.html">Our Doctors Timetable</a></li> 
        					</ul>

        				</nav>

        				<div class="header-button">
        					<span class="nl-simple header-btn blue-hover">
								<NavLink to="/appointment" className="navbar-link home-link">Make an Appointment</NavLink>
							</span>
        				</div>


    				</div>
    			</div>


			</header>
    </>
  )
}

export default Header