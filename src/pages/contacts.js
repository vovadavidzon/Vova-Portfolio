function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Beer Sheva, Israel</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2"> WhatsApp</h2>
            <p>
              <a href="tel:0547307336">0547307336</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:vovadavidzon30@gmail.com">
                vovadavidzon30@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default Contacts;
