import Navigation from "./Navigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import { useState } from "react";

function Layout(props) {
  const [sortBy, setSortBy] = useState(0);
  const callSort = (e) => {
    props.sortBy(e);
  };
  return (
    <div>
      <Navigation onSort={callSort} />
      <main className={classes.main} sort={sortBy}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
