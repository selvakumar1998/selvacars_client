import React from "react";
import "./Testimonial.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Testimonial() {
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/assets/owl.carousel.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"
        rel="stylesheet"
      />
      <section className="testimonial-section">
        <div className="large-container">
          <div className="sec-title">
            <span className="title">Testimonial</span>
            <h2>What Our core client say ?</h2>
          </div>

          <div className="testimonial-carousel owl-carousel owl-theme">
            <h1>Harshan</h1>
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="text">
                  Why is this important? Because clients want to know the
                  businesses they depend on for advice, are well managed in
                  their own right. Not only that but this event gives you the
                  chance to give your back-office team
                </div>
                <div className="info-box">
                  <div className="thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    />
                  </div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>

            <div className="testimonial-block">
              <div className="inner-box">
                <div className="text">
                  Why is this important? Because clients want to know the
                  businesses they depend on for advice, are well managed in
                  their own right. Not only that but this event gives you the
                  chance to give your back-office team
                </div>
                <div className="info-box">
                  <div className="thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                  </div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>

            <div className="testimonial-block">
              <div className="inner-box">
                <div className="text">
                  Why is this important? Because clients want to know the
                  businesses they depend on for advice, are well managed in
                  their own right. Not only that but this event gives you the
                  chance to give your back-office team
                </div>
                <div className="info-box">
                  <div className="thumb">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                    />
                  </div>
                  <h4 className="name">Mahfuz Riad</h4>
                  <span className="designation">Ui Designer & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/owl.carousel.js"></script>
    </div>
  );
}
export default Testimonial;
