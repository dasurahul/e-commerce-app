import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Item from "../components/Item";
const Home = () => {
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
        <Loading />
      </section>
    );
  }
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "40px",
        marginBottom: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
      }}
    >
      {content}
    </div>
  );
};

export default Home;
