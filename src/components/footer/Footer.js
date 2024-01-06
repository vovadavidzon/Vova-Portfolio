import instagram from "../../img/icons/instagram.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import github from "../../img/icons/gitHub.svg";

import "./style.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/vova_davidzon/?next=%2F!">
                <img src={instagram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a href="https://github.com/vovadavidzon">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/vova-davidzon/">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 V.D project</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
