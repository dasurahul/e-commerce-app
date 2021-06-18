import React from "react";
import Paper from "@material-ui/core/Paper";

const Image = (props) => {
  return (
    <Paper
      style={{
        minHeight: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontFamily: "Bangers", color: "#2874F0" }}>
        {props.data.name}
      </h1>
    </Paper>
  );
};

export default Image;
