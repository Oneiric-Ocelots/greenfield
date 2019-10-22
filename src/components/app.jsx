import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./productComponents/ProductDetails.jsx";
import Related from "./relatedComponents/Related.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/someproductID">Product</Link>
        <Switch>
          <Route path="/someproductID">
            {/* <App /> */}

            <ProductDetails />
            <Related />
          </Route>
        </Switch>
      </Router>
    );
    //  <div>app here</div>;
  }
}

export default App;
