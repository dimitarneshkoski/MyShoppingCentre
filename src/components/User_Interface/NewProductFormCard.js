import classes from "./NewProductFormCard.module.css";

function NewProductFormCard(props) {
  return <div className={classes.formCard}>{props.children}</div>;
}

export default NewProductFormCard;
