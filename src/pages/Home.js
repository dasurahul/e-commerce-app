import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Item from "../components/Item";
import Carousel from "react-material-ui-carousel";
import Image from "../components/Image";

import Fade from "@material-ui/core/Fade";

const Home = () => {
  var carouselData = [
    {
      img: "https://i02.appmifile.com/67_operator_in/17/06/2021/29849cce49889519ab8fadade49c022b.jpg",
    },
    {
      img: "https://i02.appmifile.com/553_operator_in/17/06/2021/b2fd9fc29e2dfece50cf1628fc0c9865.jpg",
    },
    {
      img: "https://i02.appmifile.com/598_operator_in/12/06/2021/75578b17da839e81f4f9d4ccb046651b.jpg",
    },
  ];
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(false);
  };
  const [items, setItems] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    axios
      .get(
        "https://shopping-website-react-default-rtdb.firebaseio.com/phones.json"
      )
      .then((response) => {
        let modifiedData = [];
        for (const key in response.data) {
          modifiedData.push({
            id: key,
            img: response.data[key].img,
            name: response.data[key].name,
            price: response.data[key].price,
            rating: response.data[key].rating,
          });
        }
        setItems(modifiedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const content = items.map((item) => {
    return <Item key={item.id} item={item} />;
  });
  if (loading) {
    return (
      <section style={{ textAlign: "center", margin: "100px 0" }}>
        <CircularProgress style={{ color: "#2874F0" }} />
      </section>
    );
  }
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Mobiles
        </Button>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Electronics
        </Button>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Appliances
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem>Latest</MenuItem>
          <MenuItem>Popular</MenuItem>
        </Menu>
      </div>
      <Carousel
        animation="slide"
        interval="3000"
        navButtonsAlwaysInvisible={true}
      >
        {carouselData.map((item, i) => (
          <Image key={i} data={item} />
        ))}
      </Carousel>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "20px",
          fontWeight: "500",
        }}
      >
        Latest Mobile Phones
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        {content}
      </div>
    </React.Fragment>
  );
};

export default Home;
