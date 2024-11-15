import React from 'react';
import 'animate.css';

const SliderSection = () => {
  return (
    <section id="slider_area" className="slider_section">
      <div id="slider_id" className="slider_style_four">
        <div className="slider_content_wrap position-relative">
          <div className="background_overlay"></div>
          <div
            className="rx_slider_img img-zooming"
            style={{ backgroundImage: 'url(assets/img/home-4/slider/s1.jpg)' }}
          ></div>
          <div className="container">
            <div className="rx_slider_text_img_area position-relative">
              <div className="rx_slider_text headline pera-content">
                <span className="animate__animated animate__fadeInUp animate__delay-1s">
                  Legal solutions for Business
                </span>
                <h1 className="animate__animated animate__fadeInUp animate__delay-2s">
                  We are recognized
                  by honorable awards
                </h1>
                <p className="animate__animated animate__fadeInUp animate__delay-2s">
                  Our specialists share skills and resources to obtain optimal
                  results for our new clients. A full-service law firm in New York.
                </p>
                <a
                  href="#"
                  className="animate__animated animate__fadeInUp animate__delay-2s"
                >
                  Our Expert Team
                </a>
              </div>
              <div className="rx_slider_side_img animate__animated animate__fadeInRight animate__delay-1s ">
                <img src="assets/img/home-4/slider/s-side.png" alt="Side Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
