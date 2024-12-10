import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/Products/ProductList";
import classes from "../components/User_Interface/LoadingScreen.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function MainPage(props) {
  const [Loading, setLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [sort, setSort] = useState(props.srt);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://e-shop-project--webdesign-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };

          products.push(product);
        }

        let control = 1;
        if (props.srt === "title") {
          products.sort((a, b) => (a.title > b.title ? 1 : -1));
        } else if (props.srt === "price") {
          products.sort((a, b) =>
            Number(a.price.slice(1)) > Number(b.price.slice(1)) ? 1 : -1
          );
        } else if (props.srt === "electronics") {
          setLoadedProducts(
            products.filter((product) => product.category === "electronics")
          );
          control = 0;
        } else if (props.srt === "tools") {
          setLoadedProducts(
            products.filter((product) => product.category === "tools")
          );
          control = 0;
        } else if (props.srt === "watches") {
          setLoadedProducts(
            products.filter((product) => product.category === "watches")
          );
          control = 0;
        } else if (props.srt === "autoaccessories") {
          setLoadedProducts(
            products.filter(
              (product) => product.category === "auto accessories"
            )
          );
          control = 0;
        }

        setLoading(false);
        control && setLoadedProducts(products);
      });
  }, [props.srt]);

  const setSortBy = (criteria) => {
    setSort(criteria);
  };

  if (Loading) {
    return (
      <div>
        <p className={classes.loading}>
          <span className={classes.reload}>&#8635;</span> Loading Page...
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>
        <HomeIcon sx={{ fontSize: 40, position: "relative", top: 7 }} /> Home /
        {props.srt === "electronics"
          ? " Electronics"
          : props.srt === "tools"
          ? " Tools"
          : props.srt === "watches"
          ? " Watches"
          : props.srt === "autoaccessories"
          ? " Auto accessories"
          : " All products"}
      </h1>
      <ProductList proizvodi={loadedProducts} />
      <Link
        to=""
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          fontSize: "20px",
          bottom: "40px",
          right: "50px",
        }}
      >
        <ArrowCircleUpIcon
          sx={{
            bottom: 40,
            right: 55,
            fontSize: 50,
            color: "rgba(47, 79, 79, 0.4)",
          }}
        />
      </Link>
    </div>
  );
}

export default MainPage;
