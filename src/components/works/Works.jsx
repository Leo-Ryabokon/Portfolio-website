import "./works.scss"
import {works} from "../../data";
import {useState} from "react";

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleClick = (way) => {
        way === "left" ?
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) :
            setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {works.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <a href={`#${d.id}  `}>Projects</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=> handleClick("left")}/>
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=> handleClick()}/>
        </div>
    );
};

export default Works;