import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/main.scss";

const Menu = React.lazy(() => import("./components/menu/Menu"));
const Header = React.lazy(() => import("./components/header/Header"));
const Content = React.lazy(() => import("./components/content/Content"));
const Quotes = React.lazy(() => import("./components/quotes/Quotes"));
const Timeline = React.lazy(() => import("./components/timeline/Timeline"));
const MyGoal = React.lazy(() => import("./components/mygoal/MyGoal"));
const Footer = React.lazy(() => import("./components/footer/Footer"));

class App extends Component {
  render() {
    return (
      <div className="container">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Menu />
          <Header />
          <Content />
          <Quotes />
          <Timeline />
          <MyGoal />
          <Footer />
        </React.Suspense>
      </div>
    );
  }
}

export default App;
