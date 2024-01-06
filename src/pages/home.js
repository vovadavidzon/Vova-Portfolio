import Header from "./../components/header/Header";
function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Skills</h2>
              <p>Python | C | C++ | Java | React</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Summary</h2>
              <p>
                1.) Looking for a student position in Software, where I can
                bring my personality and my technical capabilities (3-4 days a
                week).
              </p>
              <p>
                2.) Ability to work as a team member as well as independently.
              </p>
              <p>
                3.) Passionate about tackling challenges and finding solutions.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
export default Home;
