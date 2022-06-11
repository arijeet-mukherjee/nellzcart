import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import Category from "./categories/categories";
import SignInAndSignUpPage from "./signinsignup/sign-in-and-sign-up.component";
import {selectCurrentUser} from "./redux/user/user.selectors"
function App(props) {
  const user = selectCurrentUser;
  console.log(user);
  return (
    <Template>
      <Switch>
        <Route path="/category/:slug" exact>
          <Category />
        </Route>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route
            exact
            path="/signin"
            render={() =>
              !props ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
      </Switch>
    </Template>
  );
}

export default App;
