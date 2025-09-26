export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/hero_img.jpg" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills--section--heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                        Born in Philadelphia and moved to California when I was 13, yes I did grow up watching fresh prince of bel-air. I got my passion for technology in California while Philadelphia gave me my passion for motorsports & Football <span style={{ color: 'green' }}>(Go Birds)</span>.  
                    </p>
                    <p className="hero--section--description">
                        When I'm not developing projects, I enjoy spending my weekend's working on and tracking my car while also restoring classic games and playing super smash bros. melee.
                    </p>
                </div>
            </div>
        </section>
    )
}