import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faMapMarkerAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import logo from 'assets/img/home-4/logo/logo1.png'; // Adjust the path to your logo file

const Navbar = () => {
  return (
    <header id="header_id" className="main_header header_style_four">
      <div className="header_top_content clearfix">
        <div className="container">
          <div className="header_top_text float-left">
            <span>
              Do you want to consult us? <a href="#">Find out more</a>
            </span>
          </div>
          <div className="header_top_contact float-right">
            {/* <a href="#">
              <FontAwesomeIcon icon={faPhone} /> +987 975 865 86 8
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 503 mila St, New York, NY 10002
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} /> info@webmail.com
            </a> */}
          </div>
        </div>
      </div>
      <div className="header_main_menu_wrap clearfix">
        <div className="container">
          <div className="brand_logo float-left">
            <a href="#">
              {/* <img src={logo} alt="logo" /> */}
            </a>
          </div>
          <div className="rx_menu_item">
            <nav className="rx_main_navigation ul-li">
              <ul>
                <li className="dropdown">
                  <a href="#">Home</a>
                  <ul className="dropdown-menu clearfix">
                    <li><a href="index.html">Home Page 1</a></li>
                    <li><a href="index-2.html">Home Page 2</a></li>
                    <li><a href="index-3.html">Home Page 3</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li className="dropdown">
                  <a href="#">Service</a>
                  <ul className="dropdown-menu clearfix">
                    <li><a href="service.html">Service Page 1</a></li>
                    <li><a href="practice.html">Service Page 2</a></li>
                    <li><a href="practice-single.html">Service Details</a></li>
                  </ul>
                </li>
                <li><a href="case.html">Case Study</a></li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul className="dropdown-menu clearfix">
                    <li><a href="pricing.html">Pricing Page</a></li>
                    <li><a href="team.html">Team Page</a></li>
                    <li><a href="faq.html">FAQ Page</a></li>
                  </ul>
                </li>
                <li><a href="blog.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="rx_header_btn text-center text-uppercase float-right">
              <a href="#">Get a quote</a>
            </div>
          </div>
          <div className="rx-mobile_menu position-relative">
            <div className="rx-mobile_menu_button rx-open_mobile_menu">
              {/* <FontAwesomeIcon icon={faBars} /> */}
            </div>
            <div className="rx-mobile_menu_wrap">
              <div className="mobile_menu_overlay rx-open_mobile_menu"></div>
              <div className="rx-mobile_menu_content">
                <div className="rx-mobile_menu_close rx-open_mobile_menu">
                  {/* <FontAwesomeIcon icon={faTimes} /> */}
                </div>
                <div className="m-brand-logo text-center">
                  <a href="#">
                    {/* <img src={logo} alt="Mobile Logo" /> */}
                  </a>
                </div>
                <nav className="rx-mobile-main-navigation clearfix ul-li">
                  <ul id="m-main-nav" className="navbar-nav text-capitalize clearfix">
                    <li className="dropdown">
                      <a href="#">Home</a>
                      <ul className="dropdown-menu clearfix">
                        <li><a href="#">DropDown 1</a></li>
                        <li><a href="#">DropDown 2</a></li>
                        <li><a href="#">DropDown 3</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Features</a>
                      <ul className="dropdown-menu clearfix">
                        <li><a href="#">DropDown 1</a></li>
                        <li><a href="#">DropDown 2</a></li>
                        <li><a href="#">DropDown 3</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Login</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
