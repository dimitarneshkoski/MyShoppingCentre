import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./pages/Main";

import Layout from "./components/layout/Layout";
import AuthenticationPage from "./pages/AuthenticationPage";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./store/Authentication-context";
import { useState } from "react";
import AddNewProductPage from "./pages/AddNewProductPage";
import UserCartPage from "./pages/UserCartPage";
import Search from "./pages/Search";

function App() {
  const authCtx = useContext(AuthContext);
  const [s0rt, setS0rt] = useState(0);
  const useSrt = (e) => {
    setS0rt(e);
  };

  return (
    <Layout sortBy={useSrt}>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage srt={s0rt} />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/Add-new-product">
          <AddNewProductPage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthenticationPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/my-cart">
            <UserCartPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
