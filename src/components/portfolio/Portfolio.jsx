import "./portfolio.scss"
import PortfolioList from "../helpers/PortfolioList";
import {useEffect, useState} from "react";
import {gamePortfolio, htmlCssPortfolio, reactPortfolio, vanillaPortfolio} from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("react");
    const [data, setData] = useState([])
    const list = [
        {
            id: "react",
            title: "React JS"
        },
        {
            id: "game",
            title: "Game Dev JS"
        },
        {
            id: "vanilla",
            title: "Vanilla JS"
        },
        {
            id: "html/css",
            title: "HTML / CSS"
        }
    ];

    useEffect(()=> {
        switch (selected){
            case "react":
                setData(reactPortfolio);
                break;
            case "game":
                setData(gamePortfolio);
                break;
            case "vanilla":
                setData(vanillaPortfolio);
                break;
            case "html/css":
                setData(htmlCssPortfolio);
                break;
            default:
                setData(reactPortfolio);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList key={item.id} title={item.title} active={selected === item.id}
                                   setSelected={setSelected}
                                   id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <a href={d.url} target="_blank" rel="noreferrer" className="item" key={d.id}>
                        <img src={d.img} alt=""/>
                        <h3>{d.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;