import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import "./private.css";

const Private = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.private();
  });
  return (
    <div id="body" className="container-fluid">
      {store.token == "error user not exist" || store.token == "" ? (
        <div>
          <div className="alert alert-danger" role="alert">
            Please, do Login again!
          </div>
          <Link to="/login">
            {" "}
            <button type="submit" className="btn btn-success">
              Volver
            </button>
          </Link>
        </div>
      ) : (
        <div className="Signup-Login container mb-3 text-center">
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap"
            rel="stylesheet"
          ></link>
          <h5 className="text-white p-4">Bienvenido a su area privada</h5>
          <div className="botones">
            <button
              type="button"
              className="btn btn-outline-success boton d-block mb-4 col-md-8"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Private;
