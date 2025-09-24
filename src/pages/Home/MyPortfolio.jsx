import data from "../../data/index.json"
import React from "react";
import { Link } from "react-router-dom";


export default function MyPortfolio() {
    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Projects
                    </p>
                    <h2 className="section--heading">
                        My Portfolio
                    </h2>
                </div>
                <div>
        
                    <button className="btn btn-github" onClick={() => {window.open("https://github.com/JHarkins24", "_blank")}}>
                    <img src={"./img/github_icon.png"} alt="github"/>
            Visit My GitHub
          </button>
      
        </div>
    </div>
    <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (<div key={index}
        className="portfolio--section--card">
            <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
                </div>
                <div className="portfolio--section--card--content">
                    <div>
                        <h3 className="portfolio--section--title">{item.title}</h3>
                        <p className="text-md">{item.description}</p>
                    </div>
                    <p className="text-sm portfolio--link"> 
                      <button className="btn btn-primary" onClick={() => {window.open(item.url, "_blank")}}> 
                      {item.link}
                      </button>
              </p>
                </div>
                </div>
                ))}
        </div>
    </section>
    );
}