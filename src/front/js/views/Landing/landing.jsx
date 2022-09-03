import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div id="body" className="container-fluid">
      <div className="Signup-Login container mb-3 text-center">
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap"
          rel="stylesheet"
        ></link>
        <h3 className="text-white p-4">Sign Up or Login</h3>
        <div className="botones">
          <Link to="/signup">
            <button
              type="button"
              className="btn btn-outline-success boton d-block mb-4 col-md-8"
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="btn btn-outline-success boton d-block col-md-8"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
