import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg  bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              CHURCH
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/churches">
                    Churches
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/members">
                    Member
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/study">
                    Study
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/occasions">
                    Occasion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/prayers">
                    Pray
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/financial">
                    Financial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <nav className="navbar bg-primary">
          <a className="navbar-brand" href="/churches">
            Churches
          </a>
        </nav> */}
      </header>
    </div>
  );
};

export default HeaderComponent;
