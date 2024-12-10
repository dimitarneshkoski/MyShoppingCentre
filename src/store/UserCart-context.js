import { createContext, useState } from "react";

const UserCartContext = createContext({
  productsInCart: [],
  totalProductsInCart: 0,
  addProduct: (productAddedToCart) => {},
  removeProduct: (productId) => {},
  productIsInCart: (productId) => {},
});

export function UserCartContextProvider(props) {
  const [userProductsInCart, setUserProductsInCart] = useState([]);

  function addProductInCartHandler(productAddedToCart) {
    setUserProductsInCart((previousUserCart) => {
      return previousUserCart.concat(productAddedToCart);
    });
  }

  function removeProductInCartHandler(productId) {
    setUserProductsInCart((previousUserCart) => {
      return previousUserCart.filter((product) => product.id !== productId);
    });
  }

  function productIsInsideCartHandler(productId) {
    return userProductsInCart.some((product) => product.id === productId);
  }

  const context = {
    productsInCart: userProductsInCart,
    totalProductsInCart: userProductsInCart.length,
    addProduct: addProductInCartHandler,
    removeProduct: removeProductInCartHandler,
    productIsInCart: productIsInsideCartHandler,
  };

  return (
    <UserCartContext.Provider value={context}>
      {props.children}
    </UserCartContext.Provider>
  );
}

export default UserCartContext;
