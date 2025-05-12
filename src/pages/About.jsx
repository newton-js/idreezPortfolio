import P from "../components/P";
import Title from "../components/Title";
import aboutImg from "../assets/project-image.png";
import "./about.scss";
function About() {
  return (
    <div id="about">
      <Title number={"01"}>About Me</Title>
      <div className="about">
        <div className="left">
          <P>
            Hello! my name is Idreez and i have fun coding. From the moment
            I wrote my first line of code, I Knew I was hooked into the world of
            software development.
          </P>
          <P>
            But software development has never been ''just a job'' for me, it's
            offered an engaging challenge, which leads to constant learning and
            improvement to create high-quality software. What started with a
            simple line of code has become a full-fledged passion that only gets
            more exciting as time goes by.
          </P>
          <P>Here are a few technologies I’ve been working with recently:</P>
        </div>
        <div className="right">
          <img className="image" src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
