import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary c-nav-link">
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
          <div className="card" data-toggle="modal" data-target="#exampleModal">
            <img className="card-img-top" src="https://img.youtube.com/vi/xOBlcI3NssQ/mqdefault.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://img.youtube.com/vi/xOBlcI3NssQ/mqdefault.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://img.youtube.com/vi/xOBlcI3NssQ/mqdefault.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        {/* Card List End */}
        {/* Modal */}
        <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Some data Here</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal End */}
      </div>
    </div>
  );
}

export default App;
