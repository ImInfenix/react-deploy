import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <body>
          <div class="flex-wrapper">
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/contact" exact component={() => <Contact />} />
            </Switch>
          </div>
        </body>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
