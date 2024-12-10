import { useHistory } from "react-router-dom";
import NewProductForm from "../components/Products/NewProductForm";

function AddNewProductPage() {
  const history = useHistory();
  function addProductHandler(productData) {
    fetch(
      "https://e-shop-project--webdesign-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1 style={{ textAlign: "center" }}> Create new product listing</h1>
      <NewProductForm onAddNewProduct={addProductHandler} />
    </section>
  );
}

export default AddNewProductPage;
