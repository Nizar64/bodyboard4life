import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact.page";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import CarouselPage from "./pages/Carousel.page";
import Videos from "./pages/Videos.page";
import BoardPage from "./pages/Boards.page";

export default function Routeur() {
  return (
    // <div>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/videos/">Videos</Link>
    //     </li>
    //        <li>
    //            <Link to="/Carousel/">Carousel</Link>
    //         </li>
    //    </ul>
    //     </nav>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutPage} />
        <Route path="/carousel" component={CarouselPage} />
        <Route path="/videos" component={Videos} />
        <Route path="/Boards" component={BoardPage} />
      </Switch>
    </BrowserRouter>
  );
}
