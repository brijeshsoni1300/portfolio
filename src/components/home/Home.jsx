import React from "react"

import "./home.css";
function Home() {

    const array = "I love building Things and working with cool peoples!!!";
    const temp = [];
    for (let i = 0; i < array.length; i++){
        temp.push(<span className="home_myname_character">{array[i]}</span>);
    }

    return (
        <>
            <div className="home">
                <h5 className="blue_color">Hi, my name is</h5>
                <h1 className="home_myname">
                    <span className="home_myname_character">B</span>
                    <span className="home_myname_character">r</span>
                    <span className="home_myname_character">i</span>
                    <span className="home_myname_character">j</span>
                    <span className="home_myname_character">e</span>
                    <span className="home_myname_character">s</span>
                    <span className="home_myname_character">h</span>
                    <span className="home_myname_character"> </span>
                    <span className="home_myname_character">P</span>
                    <span className="home_myname_character">a</span>
                    <span className="home_myname_character">t</span>
                    <span className="home_myname_character">a</span>
                    <span className="home_myname_character">d</span>
                    <span className="home_myname_character">i</span>
                    <span className="home_myname_character">y</span>
                    <span className="home_myname_character">a</span>
                    </h1>
                <h1 className="home_smalldisc">{temp}</h1>
                <p className="home_generalintro">I'm a software engineer exploreing potentials of computer science to build cool stuff
                    . Recently Exploring React, Nodejs.
                </p>
             </div>
        </>
    )
}

export default Home;