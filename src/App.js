import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Sections/Home";
import Products from "./Sections/Products";
import About from "./Sections/About";
import Product from "./Components/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" component={About} />
          <Route path="/products/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
