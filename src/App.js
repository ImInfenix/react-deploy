import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Games, Projects } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <div class="flex-wrapper">
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/games" exact component={() => <Games />} />
            <Route path="/projects" exact component={() => <Projects />} />
            <Route path="/about" exact component={() => <About />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
