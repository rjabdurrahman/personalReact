import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">AR Tech</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Programming</a>
                <a className="dropdown-item" href="/">Music</a>
                <a className="dropdown-item" href="/">Fun</a>
                <a className="dropdown-item" href="/">Love</a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/">Programming</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Motivation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Jokes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Riddles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Me</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-light border border-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* Containers */}
      <div className="container mt-4">
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="video1" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="video2" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="video3" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        {/* Card List End */}
      </div>
    </div>
  );
}

export default App;
