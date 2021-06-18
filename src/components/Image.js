import React from "react";
import Paper from "@material-ui/core/Paper";

const Image = (props) => {
  return (
    <Paper
      style={{
        maxHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={props.data.img}
        style={{
          display: "block",
          minHeight: "30vh",
          width: "100%",
        }}
        alt="brand"
      />
    </Paper>
  );
};

export default Image;
