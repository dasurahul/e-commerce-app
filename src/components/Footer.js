import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Fab from "@material-ui/core/Fab";
import { ScrollTo } from "react-scroll-to";

const Footer = () => {
  return (
    <Container>
      <ScrollTo>
        {({ scroll }) => (
          <button onClick={() => scroll({ x: 0, y: 0, smooth: true })}>
            <Icon>
              <Fab
                style={{ backgroundColor: "#2874F0", color: "#fff" }}
                aria-label="add"
              >
                <ArrowUpwardIcon />
              </Fab>
            </Icon>
          </button>
        )}
      </ScrollTo>
    </Container>
  );
};

const Container = styled.div``;

const Icon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export default Footer;
