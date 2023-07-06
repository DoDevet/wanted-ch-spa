import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import Root from "./components/Root";
import Route from "./components/Route";
import "./App.css";
import About from "./components/About";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
