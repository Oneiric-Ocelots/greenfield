import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/someproductID">Product</Link>
        <Switch>
          <Route path="/someproductID"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
