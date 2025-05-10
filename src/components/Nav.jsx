import { IoMdClose } from "react-icons/io";
import Link from "./Link";
import cv from "../assets/idreez-tech-cv.pdf"
import "./nav.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
function Nav() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
      setToggle(!toggle)
  }
  return (
    <nav className={`nav ${toggle ? "toggle" : ""}`}>
      <div className="logo">
        <h2>
          N<sup>+</sup>
        </h2>
      </div>
      <ul className="main-nav-list">
        <li className="nav-list">
          01.{" "}
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-list">
          02.{" "}
          <a className="nav-link" href="#">
            Experience
          </a>
        </li>
        <li className="nav-list">
          03.{" "}
          <a className="nav-link" href="#">
            Work
          </a>
        </li>
        <li className="nav-list">
          04.{" "}
          <a className="nav-link" href="#">
            Analysis
          </a>
        </li>
        <li className="nav-list">
          05.{" "}
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-list">
          {" "}
          <Link linkTo={cv}>Resume</Link>
        </li>
      </ul>
      <div className="nav-icon-box" onClick={handleToggle}>
        <BiMenuAltRight className="nav-icon open" />{" "}
        <IoMdClose className="nav-icon close" />{" "}
      </div>
    </nav>
  );
}

export default Nav;
