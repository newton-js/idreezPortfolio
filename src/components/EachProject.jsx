import { FaExternalLinkAlt } from "react-icons/fa";
import "./eachProject.scss";

function EachProject({ projectContents, index }) {
  const { coverImg, titleInfo, title, detail, tools, linkTo } = projectContents;
  return (
    <div className={`pro-box ${index % 2 !== 0 ? "switch" : ""}`}>
      <div className="image-box">
        <img src={coverImg} alt="" className="image" />
      </div>
      <div className="detail-box">
        <p className="title-info">{titleInfo}</p>
        <p className="titles">{title}</p>
        <p className="detail">{detail}</p>
        <p className="tools">{tools?.join(", ")}</p>
        <a href={linkTo}>
          <FaExternalLinkAlt className="link-icon" />
        </a>
      </div>
    </div>
  );
}

export default EachProject;
