import "./Landing.css";
import Footer from "../Footer/Footer.js";
import Progress from "../Images/PM.png.jpg";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className="pageBody">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <button
            className="navbar-toggler button-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/login">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="page-header gradient">
        <div className="container pt-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <h1>Welcome to Projectify!</h1>
              <p>A space where you can easily manage all your project tasks.</p>
              <Link
                type="button"
                className="btn btn-outline-info btn-lg signUpBtn"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </header>
      <section className="optask">
        <div className="container text-center" role="main">
          <div className="row g-5 align-items-center justify-content-center">        
            <div className="col-md-4">
              <img
                src={Progress}
                alt="black board with to do, in progress, and done columns"
                className="img-fluid"
              />
            </div>        
          </div>
        </div>
      </section>
      <section className="feature gradient">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,181.3C672,224,768,256,864,229.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="container" role="complementary">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <h2 className="my-3">What can Projectify do?</h2>
              <ul>
                <li> Create a project.</li>
                <li> Add tasks.</li>
                <li> Git-Rrr-Done!.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-3">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
