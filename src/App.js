import React from 'react';
import Main from './main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EventPage from './components/eventPage';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main}/>
        <Route exact path="/events/:eventId" component={EventPage}/>
      </Router>
    </div>
  );
}

export default App;
