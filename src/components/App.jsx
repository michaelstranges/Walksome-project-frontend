import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../styles/App.css';
import NavBar from './NavBar.jsx';
import WalkProfilePage from './WalkProfilePage.jsx'
import VisitorHomePage from './VisitorHomePage.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Router>
            <div>
              <Route exact path="/" component={VisitorHomePage} />
              <Route path="/walk/:id" component={WalkProfilePage} />
              <Route path="/home" component={VisitorHomePage} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
