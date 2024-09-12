import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/img/logo/favicon.png";
import MobileMenus from "./mobile-menus";

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className={`offcanvas__area ${isOffCanvasOpen ? "offcanvas-opened" : ""}`}>
      
        <div className="offcanvas__bg"></div>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} style={{ width: "100%", height: "100%" }} alt="img not found" />
                </Link>
              </div>
              <div className="offcanvas__close">
                <button className="offcanvas__close-btn" type="button" onClick={() => setIsOffCanvasOpen(false)}>
                  <i className="fa-thin fa-times"></i>
                </button>
              </div>
            </div>
          
          
            <div className="offcanvas__about d-none d-lg-block mb-30">
             
            </div>
            <div className="mobile-menu fix mb-30 menu-counter d-lg-none mean-container">
              <div className="mean-bar">
                <MobileMenus />
              </div>
            </div>
            <div className="offcanvas__contact mb-30">
     
               <h4>SK Private Home</h4>
               
              <p>SK Private Home is a Diploma in Engineering Coaching Center as known as Polytechnic Coaching Centre .We are First Polytechnic Coaching Centre in Chittagong, We Services Polytechnic Students last 7 Years & we will give more.</p>
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a target="_blank" rel="noreferrer"
                      href="https://maps.app.goo.gl/7mHJDiGXEYbkphf29">
                      <i className="fal fa-map-marker-alt"></i></a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" rel="noreferrer"
                      href="https://maps.app.goo.gl/7mHJDiGXEYbkphf29">                    
Near Polytechnic Institute, Hazi Abdul Hannan Sarak, Khulshi Green Housing Society, Khulshi Colony, Chaittagong</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a href="tel:+088889797697"><i className="far fa-phone"></i></a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+880 16723 47172">+880 16723 47172</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a href="mailto:support@gmail.com"><i className="fal fa-envelope"></i></a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:support@gmail.com">skprivatehome@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <span>Page</span>
              <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/skprivetehome?mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f"></i></a></li></div>
               <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <span>Group</span>
               <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/share/icsbk4df2hjQ8PTp/?mibextid=A7sQZp"><i className="fa-brands fa-facebook-f"></i></a></li></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`} onClick={() => setIsOffCanvasOpen(false)}></div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
