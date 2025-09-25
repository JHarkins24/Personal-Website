import data from "../../data/index.json";

export default function interests() {
  return (
    <section className="interests--section" id="interests">
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
                </div>
                </div>
                ))}
        </div>
    
    </section>
  );
}
