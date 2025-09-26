import data from "../../data/index.json";

export default function interests() {
  return (
    <section className="interests--section" id="interests">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Interests</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.interests?.map((item, index) => 
        (<div key={index} className="interests--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
                </div>
                <div className="interests--section--card--content">
                    <div>
                        <h2 className="interests--section--title">{item.title}</h2>
                    </div>
                </div>
                </div>
                ))}
        </div>
    
    </section>
  );
}
