import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Signup = () => {
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
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXJW0DXCZwq8MPYqbC4FScnh5dNKmlDfY",
          {
            email,
            password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          setSuccessMessage("Your account is created");
          setTimeout(() => {
            history.push("/signin");
          }, 1000);
        })
        .catch((error) => {
          setError(error.response.data.error.message);
        });
    }
  };
  return (
    <Container style={{ margin: "80px auto" }}>
      <Card>
        <h1
          style={{ textAlign: "center", margin: "40px 0", fontWeight: "500" }}
        >
          Sign Up
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
            placeholder="Email"
            onChange={(event) => {
              setError("");
              setEmail(event.target.value);
            }}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <br />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setError("");
              setPassword(event.target.value);
            }}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="outlined"
              style={{ margin: "10px 0" }}
            >
              Sign Up
            </Button>
          </div>
          <p style={{ textAlign: "center", margin: "10px 0" }}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </Card>
    </Container>
  );
};

export default Signup;
