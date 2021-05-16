import brandIcon from "../icons/bass-guitar.png"

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-md">
    <div className="container-fluid">
        <img className="brand-icon" src={brandIcon} alt="brand icon"/>
        <a className="navbar-brand" href="/">Homejam</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
        <ul className=" navbar-nav ">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Help</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">About Us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  );
}

export default Navbar;
