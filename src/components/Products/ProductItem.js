import { useContext, useState } from "react";
import Card from "../User_Interface/Card";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "./ProductItem.module.css";
import UserCartContext from "../../store/UserCart-context";

function ProductItem(props) {
  const userCartCntxt = useContext(UserCartContext);

  const productIsInCart = userCartCntxt.productIsInCart(props.id);

  let [count, setCount] = useState(1);
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count <= 1) {
      count = 1;
      setCount(count);
    } else {
      count = count - 1;
      setCount(count);
    }
  }

  function toggleProductInCartHandler() {
    if (productIsInCart) {
      userCartCntxt.removeProduct(props.id);
    } else {
      userCartCntxt.addProduct({
        id: props.id,
        image: props.image,
        title: props.title,
        category: props.category,
        price: props.price,
        description: props.description,
        stockStatus: props.stockStatus,
        // discountStatus: props.discountStatus,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
          <p className={classes.price}>{props.price}</p>
          {props.stockStatus === "out of stock" && (
            <p className={classes.stockStatus}>{props.stockStatus}</p>
          )}
          <p className={classes.description}>{props.description}</p>
        </div>
        <div className={classes.actions}>
          {props.stockStatus === "in stock" && (
            <button onClick={toggleProductInCartHandler}>
              <span className={classes.addToCartBtnAdjust}>
                {productIsInCart ? "Remove from " : "Add to "}
              </span>
              <AddShoppingCartIcon sx={{ fontSize: 22 }} />
            </button>
          )}
        </div>
        {props.stockStatus === "in stock" && (
          <div className={classes.amountBtn}>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <button onClick={decrementCount}>-</button>
          </div>
        )}
      </Card>
    </li>
  );
}

export default ProductItem;
