import React from "react";
import "./styles/timeline.css";

function About() {
  return (
    <div>
      <div class="brick">
        <div class="home">
          <p>
            You can contact me at
            <a
              class="box-link"
              href="mailto:duncan.sourdin@protonmail.com?subject=Questions"
            >
              duncan.sourdin@protonmail.com
            </a>
          </p>
        </div>
      </div>

      <div class="brick">
        <h1>Professional experience</h1>
        <div class="timeline">
          <div class="container left">
            <div class="content">
              <h2>June 2020 - August 2020</h2>
              <h3>(2 months)</h3>
              <img
                src="https://www.geves.fr/wp-content/uploads/LOGO.png"
                alt="GEVES Logo"
              />
              <p>
                Internship at GEVES. Multispectral and hyperspectral images
                processing to study a wheat disease.
              </p>
              <h3>Technologies used</h3>
              <p>MATLAB Python</p>
            </div>
          </div>
        </div>
      </div>

      <div class="brick">
        <h1>Education</h1>
        <div class="timeline">
          <div class="container left">
            <div class="content">
              <h2>2020 - 2021</h2>
              <h3>(Currently doing)</h3>
              <p>
                Computer Science master degree at UQAC
                <br />
                Specialized in Video Games
              </p>
              <h2>2018 - 2021</h2>
              <h3>(Currently doing)</h3>
              <p>
                Computer Science engineering diploma at ESIR
                <br />
                Specialized in Digital Imaging
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>2016 - 2018</h2>
              <p>
                Two-year university course at Universit&#233; de Rennes 1<br />
                Mathematics, Computer Science and Electronics
              </p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>2013 - 2016</h2>
              <p>High School Diploma in Sciences</p>
            </div>
          </div>
        </div>
      </div>

      <div class="brick">
        <h1>Other Activity</h1>
        <div class="timeline">
          <div class="container right">
            <div class="content">
              <h2>September 2020</h2>
              <p>
                TOEIC (870)
                <br />
              </p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>June 2019</h2>
              <p>
                Intership at ESIR
                <br />
                Video realization for the graduation ceremony
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>February 2018 - April 2018 (3 months)</h2>
              <p>
                Personal Initiative Work
                <br />
                "Cryptography applied to a non-standard format"
              </p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>July 2017 - August 2017 (2 months)</h2>
              <p>
                Seasonal Job
                <br />
                Material handling and cleaning at a swimming pool and schools
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>May 2017 - June 2017 (1 month)</h2>
              <p>Internship at a bakery</p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>2013</h2>
              <p>First Aid Training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
