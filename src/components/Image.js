import React from "react";
import Paper from "@material-ui/core/Paper";

const Image = (props) => {
  return (
    <Paper
      style={{
        maxHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={props.data.img}
        style={{ display: "block", width: "100%", object: "contain" }}
        alt="anything"
      />
      <h1
        style={{ fontFamily: "Bangers", color: "#555", position: "absolute" }}
      >
        Mobile Bazaar
      </h1>
    </Paper>
  );
};

export default Image;
