import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import axios from "axios";
import AuthContext from "../store/auth-context";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";
import { auth } from "../firebase";
import { signInWithGoogle } from "../firebase";

const Signin = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 && password.trim().length === 0) {
      setError("Enter something");
    } else if (email.trim().length === 0) {
      setError("Enter email");
    } else if (password.trim().length === 0) {
      setError("Enter password");
    } else {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXJW0DXCZwq8MPYqbC4FScnh5dNKmlDfY",
          {
            email,
            password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          authContext.login(response.data.idToken);
          setSuccessMessage("You are logged in");
          setTimeout(() => {
            history.push("/");
          }, 1000);
        })
        .catch((error) => {
          setError(error.response.data.error.message);
        });
    }
  };

  const googleSignin = () => {
    // auth.signInWithGoogle().then((response) => console.log(response));
    // console.log(firebase);
    // const provider = new firebase.auth.GoogleAuthProvider();
    // provider.setCustomParameters({ prompt: "select_account" });
    // const signInWithGoogle = () => auth.signInWithPopup(provider);
    // console.log(provider);
    // console.log(signInWithGoogle);
    console.log(auth);
  };
  return (
    <Container style={{ margin: "80px auto" }}>
      <Card>
        <h1
          style={{ textAlign: "center", margin: "40px 0", fontWeight: "500" }}
        >
          Sign In
        </h1>
        <form
          onSubmit={submitHandler}
          style={{ width: "90%", maxWidth: "500px", margin: "40px auto" }}
        >
          <Collapse in={error ? true : false}>
            <Alert
              style={{ marginBottom: "15px" }}
              severity="error"
              onClose={() => setError("")}
            >
              {error}
            </Alert>
          </Collapse>
          <Collapse in={successMessage ? true : false}>
            <Alert
              style={{ marginBottom: "15px" }}
              severity="success"
              onClose={() => setSuccessMessage("")}
            >
              {successMessage}
            </Alert>
          </Collapse>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            onChange={(event) => {
              setError("");
              setEmail(event.target.value);
            }}
            placeholder="Email"
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <br />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setError("");
              setPassword(event.target.value);
            }}
            placeholder="Password"
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="outlined"
              style={{ margin: "10px 0" }}
            >
              Sign In
            </Button>
            <br />
            <Button onClick={signInWithGoogle}>
              <img
                style={{ height: "40px" }}
                src="https://img.icons8.com/plasticine/100/000000/google-logo.png"
              />
              Signin Google
            </Button>
          </div>
          <p style={{ textAlign: "center", margin: "10px 0" }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </Card>
    </Container>
  );
};

export default Signin;
