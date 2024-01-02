import "./style.css";
import gitHubIcone from "./../../img/icons/gitHub-black.svg";

function BtnGitHub({ link }) {
  return (
    <a href={link} target="blank" className="btn-outline">
      <img src={gitHubIcone} alt="" />
      GitHub repo
    </a>
  );
}
export default BtnGitHub;
