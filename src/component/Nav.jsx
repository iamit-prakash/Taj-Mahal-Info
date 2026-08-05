import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-dark text-light">
      <div className="container py-4">
        <h1 className="display-3">Taj Mahal</h1>

        <nav className="mt-4">
          <Link to="/" className="me-5 text-decoration-none">
            Overview
          </Link>

          <Link to="/history" className="me-5 text-decoration-none">
            History
          </Link>

          <Link to="/architecture" className=" me-5 text-decoration-none">
            Architecture
          </Link>

          <Link to="/details" className=" me-5 text-decoration-none">
            Details
          </Link>
        </nav>
      </div>
    </header>
  );
}