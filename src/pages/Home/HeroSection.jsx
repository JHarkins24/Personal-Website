import ResumeButton from "./ResumeButton";

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
                    I am a Los Angeles based Software Engineer with a passion for building, Shipping, and maintaining useful and meaningful products. I have 3.5 years of expierence in Data Science and Back-end Software Engineering. My goal is to one day attain the skills and expierence needed to become a full stack Software Engineer!
                </p>
            </div>
                <ResumeButton />
              {/*  <button className="btn btn-primary">Resume</button> */}
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}