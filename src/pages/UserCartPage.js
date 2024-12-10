import { useContext } from "react";
import { Link } from "react-router-dom";
import UserCartContext from "../store/UserCart-context";
import ProductList from "../components/Products/ProductList";
import classes from "./UserCartPage.module.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaymentIcon from "@mui/icons-material/Payment";

function UserCartPage() {
  const productsInCartCtx = useContext(UserCartContext);

  let content;

  if (productsInCartCtx.totalProductsInCart === 0) {
    content = (
      <div>
        <p>No items in cart.</p>
        <Link to="/">
          <button className={classes.btn}>
            <span>Start shopping </span>
            <LocalMallIcon />
          </button>
        </Link>
      </div>
    );
  } else {
    content = (
      <div>
        <ProductList proizvodi={productsInCartCtx.productsInCart} />
        <button className={classes.btn}>
          <span>Pay with your card </span> <PaymentIcon sx={{ fontSize: 27 }} />
        </button>
      </div>
    );
  }

  return (
    <section className={classes.center}>
      <h1>Products in your cart:</h1>
      {content}
    </section>
  );
}

export default UserCartPage;
