import "./intro.scss"
import {useEffect, useRef} from "react";
import {init} from "ityped";

const Intro = () => {
    const textRef = useRef()

    useEffect(() => {

        init(textRef.current, { showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', ] })

    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/me.jpeg" alt="me"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Leonid Ryabokon</h1>
                    <h3>Frontend  <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <img src="assets/arrow.png" alt="arrowDown"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;