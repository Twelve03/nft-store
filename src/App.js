import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Sections/Home";
import Search from "./Sections/Search";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Nft from "./Components/Nft";
import Seller from "./Components/Seller";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="m-0 p-0 border-box">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/nft/:id" component={Nft} />
          <Route path="/seller/:id" component={Seller} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
