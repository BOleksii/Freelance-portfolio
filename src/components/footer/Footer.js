import { NavLink } from "react-router-dom";

import linkedin from "./../../img/icons/linkedin.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import github from "./../../img/icons/github.svg";
import gitlab from "./../../img/icons/gitlab.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wraper">
          <ul className="social">
            <li className="social__item">
              <NavLink to="#!">
                <img src={instagram} alt="link"></img>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink to="#!">
                <img src={twitter} alt="link"></img>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink
                to="https://gitlab.com/bernatskyioleksii"
                target="_blank"
              >
                <img src={gitlab} alt="link"></img>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink to="https://github.com/BOleksii" target="_blank">
                <img src={github} alt="link"></img>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink to="#!">
                <img src={linkedin} alt="link"></img>
              </NavLink>
            </li>
          </ul>
          <div className="copyright">
            <p>© Bernac'kyi O. 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
