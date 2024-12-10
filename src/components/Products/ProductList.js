import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

function ProductList(props) {
  return (
    <div className={classes.list}>
      {props.proizvodi.map((proizvod) => (
        <ProductItem
          key={proizvod.id}
          id={proizvod.id}
          image={proizvod.image}
          title={proizvod.title}
          category={proizvod.category}
          price={proizvod.price}
          stockStatus={proizvod.stockStatus}
          // discountStatus={proizvod.discountStatus}
          description={proizvod.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
