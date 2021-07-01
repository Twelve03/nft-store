import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Sections/Home";
import Search from "./Sections/Search";
import Products from "./Sections/Products";
import About from "./Sections/About";
import Product from "./Components/Product";

function App() {
  return (
    <Router>
      <div className="m-0 p-0 border-box">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" component={About} />

          <Route path="/products/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
