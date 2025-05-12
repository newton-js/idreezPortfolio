import TabbedComponent from "../components/TabbedComponent"
import Title from "../components/Title"
import "./experience.scss"

const contents = [
  {
    post: "Frontend Developer",
    firm: "Newcore",
    firmLink: "https://newcoretechnologies.com/",
    dateFrom: "October 2020",
    dateTo: "july 2021",
    workMode: "Part-time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Implement the front-end of FamTree web application",
    ],
  },
  {
    post: "Frontend",
    firm: "Virtuous Sprout",
    firmLink: "https://virtuousSprout.org/",
    dateFrom: "October 2021",
    dateTo: "july 2023",
    workMode: "Part-time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Implement the front-end of Admin web application",
      "Implement Student result portal",
    ],
  },
  {
    post: "Backend",
    firm: "Crown Institute",
    firmLink: "https://virtuousSprout.org/",
    dateFrom: "October 2021",
    dateTo: "july 2023",
    workMode: "Part-time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Implement the front-end of Admin web application",
      "Implement Student result portal",
    ],
  },
  {
    post: "full stack",
    firm: "Newcore",
    firmLink: "https://virtuousSprout.org/",
    dateFrom: "October 2021",
    dateTo: "july 2023",
    workMode: "Part-time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Implement the front-end of Admin web application",
      "Implement Student result portal",
    ],
  },
  {
    post: "Mobile-App",
    firm: "Surdtech",
    firmLink: "https://surdtech.org/",
    dateFrom: "Oct 2021",
    dateTo: "june 2026",
    workMode: "Full-time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Implement the front-end of Admin web application",
      "Implement Student result portal", "i like iragbiji girls"
    ],
  },
];

function Experience() {
    return (
        <div id="experience" className="experience">
            <Title number={"02"}>Where I've Worked</Title>
            <TabbedComponent contents={contents}/>
        </div>
    )
}

export default Experience
