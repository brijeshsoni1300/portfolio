import react, { useEffect, useState } from "react";
import "./Experience.css";

function Experiance() {
  const [data, setData] = useState({
    meriwebsite: {
      title: "Meri Website",
      show: true,
      timeline: "April 2022 - Present",
      points: [
        "Write modern, performant, maintads afd saf inable code for our own code base",
        "Used by 1000s of businesse sdfaf sdf dss now!!!",
        "Solving how to scale software to serve high traffic",
      ],
    },
    company1: {
      title: "cp1",
      show: false,
      timeline: "April 2022 - Present",
      points: [
        "Write  or our own code base",
        "Used by  daf of businesses now!!!",
        "Solving how to scale softdsafdsafsdaf df aware to serve high traffic",
      ],
    },
    company2: {
      title: "cp2 ",
      show: false,
      timeline: "April 2022 - Present",
      points: [
        "Write modern, performant, maintainable code for our own code base",
        "Used by 1000s of businesses now!!!",
        "Solving how to scale software to serve high traffic",
      ],
    },
  });

   
  const [keys, setKeys] = useState(Object.keys(data));

   
 

  const [activeCompany,setActiveCompany] = useState(keys[0]);
  function changeactiveCompany(key){
    setActiveCompany(key);
    var temp = data;
    temp.forEach(element => {
        element.show = false;
    });
    temp[key].show = true;
    setData(temp);
  }
  return (
      
    <>
      <div class="experience">
        <h1>
          <span class="blue_color">
            <span class="character">0</span>
            <span class="character">2</span>
            <span class="character">.</span>
            <span class="character"> </span>
          </span>
          <span class="character">W</span>
          <span class="character">h</span>
          <span class="character">e</span>
          <span class="character">r</span>
          <span class="character">e</span>
          <span class="character"> </span>
          <span class="character">I</span>
          <span class="character">'</span>
          <span class="character">v</span>
          <span class="character">e</span>
          <span class="character"> </span>
          <span class="character">W</span>
          <span class="character">o</span>
          <span class="character">r</span>
          <span class="character">k</span>
          <span class="character">e</span>
          <span class="character">d</span>
        </h1>
        <div class="experienc_grid">
          <div className="experience_side_navbar dull_white_color">
            <ul>
              {keys.map((key, index) => {
                return (
                  <li onClick={() => {
                    changeactiveCompany(key);
                  }} key={index}>
                    {key}
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="experience_details">
            <Details details={data[activeCompany]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiance;

function NavBar(props) {}

function Details(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <div class="details  ">
        <h1 class="white_color">
          Engineer <span class="blue_color"> @{props.details["title"]}</span>
        </h1>
        <h5 class="dull_white_color">{props.details["timeline"]}</h5>
        <ul class="dull_white_color">
          {props.details["points"].map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
