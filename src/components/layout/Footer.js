import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.UpperEndOfPage}></div>
      <div className={classes.endOfPage}>MyShoppingCenter &#xa9; 2022</div>
    </div>
  );
}

export default Footer;
