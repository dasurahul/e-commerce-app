import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Item from "../components/Item";
import Carousel from "react-material-ui-carousel";
import Image from "../components/Image";

const Home = () => {
  var data = [
    {
      img: "https://images.samsung.com/is/image/samsung/assets/in/Fold2_IN_1440x640-MAIN.jpg?$ORIGIN_JPG$",
    },
    {
      img: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1623924292319/05b576892e35f28a038b5daf678bd8dc.jpg",
    },
    {
      img: "https://i02.appmifile.com/598_operator_in/12/06/2021/75578b17da839e81f4f9d4ccb046651b.jpg",
    },
  ];
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
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
        <CircularProgress />
      </section>
    );
  }
  return (
    <React.Fragment>
      <Carousel>
        {data.map((item, i) => (
          <Image key={i} data={item} />
        ))}
      </Carousel>
      <h1 style={{ textAlign: "center", margin: "40px 0", fontWeight: "500" }}>
        Latest Mobile Phones
      </h1>
      <div
        style={{
          width: "90%",
          maxWidth: "800px",
          margin: "0 auto",
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "20px",
          gap: "40px",
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
      >
        {content}
      </div>
    </React.Fragment>
  );
};

export default Home;
