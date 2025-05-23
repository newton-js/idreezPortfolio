import { useInView } from "react-intersection-observer";
import proImg from "../assets/cbt.png";
import worldwise from "../assets/worldwise.png";
import toshnet from "../assets/toshnet.png";
import EachProject from "../components/EachProject";
import MoreProjects from "../components/MoreProjects";
import Title from "../components/Title";
import "./projects.scss";

const projectContents = [
  {
    coverImg: proImg,
    titleInfo: "Whole Project",
    title: "CBT Quiz Site",
    detail:
      "A tool that helps take test, exam or quiz digitally, an interactive quiz platform where users can take computer-based tests (CBTs), view results, and where admins can manage questions and exams..",
    tools: ["ReactJS", "ContextAPI"],
    linkTo: "https://smartcbtquiz.netlify.app",
  },
  {
    coverImg: worldwise,
    titleInfo: "Featured Project",
    title: "WorldWise",
    detail:
      "A travel and  tour site to get the best location and explore the world for adventure easily",
    tools: ["ReactJS", "ContextAPI"],
    linkTo: "https://github.com/newton-js/worldwise",
  },
  {
    coverImg: toshnet,
    titleInfo: "Featured Project",
    title: "Toshnet",
    detail:
      "A farming site for crops and livestocks like cow, goat, ram, rabbit and grasscutter to consumers. For our fellow partners in the agriculture industry, we can help to provide tools, machinery and services to help grow your agri-business.",
    tools: [ "Html", "Css", "Javascript"],
    linkTo: "https://toshnetfarms.org",
  },
];

const moreProjects = [
  {
    title: "PaySplit",
    gitLink: "https://github.com/newton-js/Payment-Splitting-Computation",
    link: "https://github.com/newton-js/Payment-Splitting-Computation",
    detail:
      "A nodejs service for computing transaction payment splitting. Uses NodeJS (Express) and MongoDB as the database, and it will be used as a reference and it is a very flexible project ",
    tools: ["TypeScript", "NodeJs", "MongoDB"],
  },
  {
    title: "WorldWise",
    gitLink: "https://github.com/newton-js/worldwise",
    link: "https://github.com/newton-js/worldwise",
    detail:
      " A mapping site built to provide important information about the countries in the world, with various endpoints. Uses countries API and other useful libraries as tools",
    tools: ["ReactJs", "ContextAPI", "lodash"],
  },
  {
    title: "Newcore Business",
    gitLink: "https://github.com/newcoreBiz",
    link: "https://newcorebusiness.vercel.app/",
    detail:
      " Here’s a structured overview of a Business App (frontend focus) — adaptable to many use cases like CRM, sales tracking, employee management, or inventory dashboards.",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Country App",
    gitLink: "https://github.com/my-country-app",
    link: "https://earthcountries.netlify.app",
    detail:
      " A restful API built to provide important information about the countries in the world, with various endpoints. ",
    tools: ["ReactJs", "Javascript", "RestAPI"],
  },
  {
    title: "Forkify",
    gitLink: "https://github.com/newton-js",
    link: "https://newton-forkify.netlify.app",
    detail:
      "A responsive web app where users can browse the menu, place orders (dine-in, takeaway, or delivery), and where admins can manage orders, menu items, and customer data.",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Popcorn",
    gitLink: "https://github.com/newton-js/use-popcorn",
    link: "https://toshnetfarms.org",
    detail:
      "A responsive web app where users can search movies, rate movies and review movies ",
    tools: ["React", "CSS"],
  },
];

function Projects() {
  const [ref, inView, entry] = useInView({ threshold: 0 });
  return (
    <div ref={ref} id="work" className={`projects ${inView ? "glows-up" : ""}`}>
      {/* // <div ref={ref} id="work" className={`projects`}> */}
      <Title number={"03"}>Some Things I've Built</Title>
      <div>
        {projectContents.map((project, index) => (
          <EachProject projectContents={project} index={index} key={index} />
        ))}
      </div>
      <h2 className="subheading" id="more">
        Other Catchy Projects
      </h2>
      <div className="moreProjects">
        {moreProjects.map((more, index) => (
          <MoreProjects moreProjects={more} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
