export default function HeroSection(){
    return(
        <section id= "heroSection" className="hero--section">
            <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hello, I'm Joe Harkins!</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Software</span>{" "}
                    <br />Engineer
                </h1>
                <p className="hero--section--description">
                    I am a aspiring Software Engineer and Data Scientist looking for oppurtunities to grow and show my expertise. If you would like to view my resume
                    please use the button below!
                </p>
            </div>
            <button className="btn btn-primary">Resume</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}