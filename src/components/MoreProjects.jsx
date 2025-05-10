import { FaExternalLinkAlt, FaRegFolder } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./moreProjects.scss";

function MoreProjects({moreProjects}) {
    const {title, detail, tools, gitLink, link} = moreProjects
  return (
    <div className="more-Projects">
      <div className="more-top">
        <FaRegFolder className="more-icon"/>
        <div className="iconics">
          <a href={gitLink}>
            <FiGithub className="more-iconics" />
          </a>
          <a href={link}>
            <FaExternalLinkAlt className="more-iconics" />
          </a>
        </div>
      </div>
      <h2 className="more-title">{title}</h2>
      <p className="more-p">
       {detail}
      </p>
      <p className="tools">{tools?.join(", ")}</p>
    </div>
  );
}

export default MoreProjects;
