import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import fireDb from "../firebase";
import ProductList from "../components/Products/ProductList";

import classes from "./Search.module.css";

const Search = () => {
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  let search = query.get("title");

  useEffect(() => {
    searchData();
  }, [search]);

  const searchData = () => {
    fireDb
      .child("products")
      .orderByChild("title")
      .equalTo(search)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          let proizvodi = [];
          for (const key in data) {
            proizvodi.push({
              key: key,
              id: key,
              image: data[key].image,
              title: data[key].title,
              category: data[key].category,
              price: data[key].price,
              stockStatus: data[key].stockStatus,
              discountStatus: data[key].discountStatus,
              description: data[key].description,
            });
          }
          setResults(proizvodi);
          setData(data);
        }
      });
  };

  return (
    <>
      <div className={classes.text}>
        <h1>Search results:</h1>
        {results.length === 0 ? (
          <h3>
            No results found with title :{" "}
            <span className={classes.noResultTitle}>{query.get("title")}</span>
          </h3>
        ) : (
          <ProductList proizvodi={results} />
        )}
      </div>
    </>
  );
};

export default Search;
