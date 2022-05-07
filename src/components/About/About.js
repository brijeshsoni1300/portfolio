import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div>
          <h1>
            <span class="blue_color">
              <span class="character">0</span>
              <span class="character">1</span>
              <span class="character">.</span>
              <span class="character"> </span>
            </span>
            <span class="character">A</span>
            <span class="character">b</span>
            <span class="character">o</span>
            <span class="character">u</span>
            <span class="character">t</span>
            <span class="character"> </span>
            <span class="character">M</span>
            <span class="character">e</span>
          </h1>
          <p class="disc_text_color">
            Hello! My name is Brijesh and I enjoy creating things that live on
            the internet, with good peoples. I am exploring computer science
            core and software development since more then a year now.
          </p>
          <p class="disc_text_color">
            I am excited to join team which are working on some problems which
            can make some actual impact in realtime.
          </p>
          <p class="disc_text_color">
            Though I m not yet bounded by any technology but below are some tech
            stack which i explored recently.
          </p>
          <div class="disc_text_color">
            <ul class="about_ul">
              <li>Flutter</li>
              <li>React</li>
              <li>Node</li>
              <li>Mongo DB</li>
              <li>JavaScript</li>
              <li>Android</li>
            </ul>
          </div>
        </div>
        <div>img</div>
      </div>
    </>
  );
}

export default About;
