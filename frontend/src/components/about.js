import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.dailymail.co.uk/i/pix/2018/02/01/15/48CB545600000578-5340261-image-a-9_1517500412640.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Chhano is a website providing property rental services to the students of Kathmandu University.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;