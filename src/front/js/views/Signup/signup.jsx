import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Navigate } from "react-router-dom";
import "./signup.css";

let email = "";
let password = "";

const Signup = () => {
  const { actions } = useContext(Context);
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="p-5 mt-5">
      <div className="Signup container mb-3 text-center text-white p-4">
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap"
          rel="stylesheet"
        ></link>
        <h3 className="text-center font-weight-bold mb-3">Signup</h3>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await actions.signup(email, password);
            setRedirect(true);
          }}
        >
          <div>
            <input
              type="email"
              className="form-control shadow-sm mb-3"
              placeholder="Email"
              onChange={(e) => {
                email = e.target.value;
              }}
            ></input>
          </div>

          <div className="py-3">
            <input
              type="password"
              className="form-control shadow-sm"
              placeholder="Contraseña"
              onChange={(e) => {
                password = e.target.value;
              }}
            ></input>
          </div>

          <div className="p-3">
            <button
              type="submit"
              className="btn btn-outline-success boton col-md-8"
            >
              Registrarse
            </button>
          </div>
        </form>
        {redirect ? <Redirect to="/login"></Redirect> : null}
      </div>
    </div>
  );
};
export default Signup;
