import Project from "../components/project/Project";
import project01 from "./../img//projects/01.jpg";
import project02 from "./../img/projects/02.jpg";
import project03 from "./../img/projects/03.jpg";
import project04 from "./../img/projects/04.jpg";
import project05 from "./../img/projects/05.jpg";
import project06 from "./../img/projects/06.jpg";
function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1"> My Projects</h2>
        <ul className="projects">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ul>
      </div>
    </main>
  );
}
export default Projects;
