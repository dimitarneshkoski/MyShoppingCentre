import { useRef } from "react";

import NewProductFormCard from "../User_Interface/NewProductFormCard";
import classes from "./NewProductForm.module.css";

function NewProductForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const categoryInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const stockStatusInputRef = useRef();
  // const discountStatusInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredStockStatus = stockStatusInputRef.current.value;
    // const enteredDiscountStatus = discountStatusInputRef.current.value;

    const productData = {
      title: enteredTitle,
      image: enteredImage,
      category: enteredCategory,
      price: enteredPrice,
      description: enteredDescription,
      stockStatus: enteredStockStatus,
      // discountStatus: enteredDiscountStatus,
    };

    props.onAddNewProduct(productData);
  }

  return (
    <NewProductFormCard>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            placeholder="Enter product name"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Product Category:</label>
          <input
            type="text"
            required
            id="category"
            ref={categoryInputRef}
            placeholder="watches, tools, electronics..."
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Product Price:</label>
          <input
            type="text"
            required
            id="price"
            ref={priceInputRef}
            placeholder="Add price in format '$12.34'"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image:</label>
          <input
            type="url"
            placeholder="Insert image URL..."
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Product Description:</label>
          <textarea
            id="description"
            required
            rows="6"
            ref={descriptionInputRef}
            placeholder="Describe the product..."
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="stockStatus">Is Product in stock?</label>
          <input
            type="text"
            required
            id="stockStatus"
            ref={stockStatusInputRef}
            placeholder="in stock / out of stock"
          />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="discountStatus">Is Product on discount?</label>
          <input
            type="text"
            required
            id="discountStatus"
            ref={discountStatusInputRef}
            placeholder="on discount / regular"
          />
        </div> */}
        <div className={classes.actions}>
          <button>Add new product</button>
        </div>
      </form>
    </NewProductFormCard>
  );
}

export default NewProductForm;
