import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/Authentication-context";
import UserCartContext from "../../store/UserCart-context";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MyShoppingCentreLogo from "../../images/MyShoppingCentreLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import BuildIcon from "@mui/icons-material/Build";
import CableIcon from "@mui/icons-material/Cable";
import WatchIcon from "@mui/icons-material/Watch";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

function Navigation(props) {
  const userCartCtx = useContext(UserCartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  const [search, setSearch] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?title=${search}`);
    setSearch("");
  };

  const [sortHandle, setSortHandle] = useState(0);

  const handleSortBy = (e) => {
    setSortHandle(e.target.value);
    props.onSort(e.target.value);
    console.log(e.target.value);
  };

  const handleResetSort = () => {
    setSortHandle(0);
    props.onSort(0);
  };

  const sortCategory = (e) => {
    e.preventDefault();
    props.onSort(e.target.id);
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link onClick={handleResetSort} to="/">
            {" "}
            <img src={MyShoppingCentreLogo} alt="MyShoppingCentre" />
          </Link>
        </div>
        <form onSubmit={handleSearchSubmit} className={classes.form}>
          <input
            type="text"
            className={classes.inputField}
            placeholder=" Search for products..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className={classes.searchBtn} onClick={handleSearchSubmit}>
            <div>
              <SearchIcon />
            </div>
          </button>
        </form>
        <ul>
          {isLoggedIn && (
            <li className={classes.addNewListing}>
              <Link to="/my-cart">
                <ShoppingCartIcon sx={{ position: "relative", top: 0.5 }} />{" "}
                <span className={classes.myCartBtnAdjustment}>
                  {userCartCtx.totalProductsInCart !== 0 && (
                    <span className={classes.userCartBadge}>
                      {userCartCtx.totalProductsInCart}
                    </span>
                  )}
                  My Cart
                </span>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes.addNewListing}>
              <Link to="/add-new-product">
                <LibraryAddIcon sx={{ fontSize: 22 }} />
                <span className={classes.addNewButtonAdjust}>
                  {" "}
                  Add New Listing
                </span>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">
                <PeopleAltIcon />
                <span className={classes.login}> Login / Register</span>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">
                <ManageAccountsIcon
                  sx={{
                    fontSize: 24,
                    position: "relative",
                    top: 3.5,
                    paddingRight: 0.4,
                  }}
                />
                Profile
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes.logout}>
              <button onClick={logoutHandler}>
                <span>Logout </span>
                <LogoutIcon sx={{ fontSize: 16 }} />
              </button>
            </li>
          )}
        </ul>
      </header>
      <div className={classes.lowerPart}>
        <div className={classes.dropdown}>
          <button className={classes.dropBtn}>
            <span>&equiv; </span> Categories
          </button>
          <div className={classes.dropdownContent}>
            <a onClick={sortCategory} id="electronics">
              <CableIcon sx={{ position: "relative", top: 5 }} /> | Electronics
            </a>
            <br />
            <br />
            <a onClick={sortCategory} id="tools">
              <BuildIcon sx={{ position: "relative", top: 5 }} /> | Tools
            </a>
            <br />
            <br />
            <a onClick={sortCategory} id="watches">
              <WatchIcon sx={{ position: "relative", top: 5 }} /> | Watches
            </a>
            <br />
            <br />
            <a onClick={sortCategory} id="autoaccessories">
              <DirectionsCarIcon sx={{ position: "relative", top: 5 }} /> | Auto
              accessories
            </a>
            <br />
            <br />
          </div>
        </div>
        <div className={classes.wholeSort}>
          <label> Sort by: </label>
          <select
            className={classes.sortByDropDown}
            name="colValue"
            value={sortHandle}
            onChange={handleSortBy}
          >
            <option>Select:</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
          <button onClick={handleResetSort} className={classes.resetSortBtn}>
            Reset
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
