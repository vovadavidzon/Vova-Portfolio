import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import github from "../../img/icons/gitHub.svg";
import twitter from "../../img/icons/twitter.svg";
import "./style.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 V.D</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
