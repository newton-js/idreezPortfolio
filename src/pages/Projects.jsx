import { useInView } from "react-intersection-observer";
import proImg from "../assets/project-image.png";
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
      "A tool that helps take test, exam or quiz digitally Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, fugit rerum corporis recusandae deleniti esse ullam quibusdam eos natus non suscipit, dolorem iure nesciunt sit amet consectetur adipisicing elit.nostrum quibusdam facere, iure exercitationem, saepe est suscipit quia totam molestias error in qui nisi sequi fuga.",
    tools: ["ReactJS", "ContextAPI"],
    linkTo: "https://newcoretechnologies.com",
  },
  {
    coverImg: proImg,
    titleInfo: "Featured Project",
    title: "Virtuous Sprout",
    detail:
      "A tool that helps take test, exam or quiz digitally Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, fugit rerum corporis recusandae deleniti esse ullam quibusdam eos natus non suscipit, dolorem iure nesciunt. Illum culpa sit eveniet distinctio debitis?",
    tools: ["ReactJS", "ContextAPI", "styled Components"],
    linkTo: "https://virtuous-sprout.ord",
  },
  {
    coverImg: proImg,
    titleInfo: "Featured Project",
    title: "Jipson",
    detail:
      "recusandae deleniti esse ullam quibusdam eos natus non suscipit, dolorem iure nesciunt. Illum culpa sit eveniet distinctio debitis?",
    tools: ["ReactJS", "ContextAPI", "styled Components"],
    linkTo: "https://jipson.com",
  },
];



const moreProjects = [
    {
        title: "Toshnet",
        gitLink: "https://github.com/newton-js",
        link: "https://toshnetfarms.org",
        detail: " A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database",
        tools: ["NodeJS", "Express", "MongoDB" ]
    },
    {
        title: "Toshnet",
        gitLink: "https://github.com/newton-js",
        link: "https://toshnetfarms.org",
        detail: " A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database, and it will be used as a reference and it is a very flexible project ",
        tools: ["NodeJS", "Express", "MongoDB" ]
    },
    {
        title: "Toshnet",
        gitLink: "https://github.com/newton-js",
        link: "https://toshnetfarms.org",
        detail: " A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database",
        tools: ["NodeJS", "Express", "MongoDB" ]
    },
    {
        title: "Toshnet",
        gitLink: "https://github.com/newton-js",
        link: "https://toshnetfarms.org",
        detail: " A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database",
        tools: ["NodeJS", "Express", "MongoDB" ]
    },
    {
        title: "Toshnet",
        gitLink: "https://github.com/newton-js",
        link: "https://toshnetfarms.org",
        detail: " A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database, and it will be used as a reference ",
        tools: ["NodeJS", "Express", "MongoDB" ]
    },
    {
        title: "Toshnet",
        gitLink: "https://github.com/newton-js",
        link: "https://toshnetfarms.org",
        detail: " A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database",
        tools: ["NodeJS", "Express", "MongoDB" ]
    },
]


function Projects() {
  const [ref, inView, entry] = useInView({threshold:0})
  return (
    <div ref={ref} id="work" className={`projects ${inView ? "glows-up" : ''}`}>
    {/* // <div ref={ref} id="work" className={`projects`}> */}
      <Title number={"03"}>Some Things I've Built</Title>
      <div>
        {projectContents.map((project, index) => (
          <EachProject projectContents={project} index={index} key={index} />
        ))}
      </div>
      <h2 className="subheading" id="more">Other Catchy Projects</h2>
      <div className="moreProjects" >
        {moreProjects.map((more, index) => <MoreProjects moreProjects={more} key={index}/>)}
      </div>
    </div>
  );
}

export default Projects;
