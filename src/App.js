import React from 'react';
import SelectionSort from './SortingVisualizer/SelectionSort';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.jsx'
import BubbleSort from './SortingVisualizer/BubbleSort'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Router>
      <div className="App">
          <Nav/>
          <Switch>
            <Route path='/selection-sort'  component={SelectionSort}/>
            <Route path='/bubble-sort' component={BubbleSort}/>
            <Route path='/Modal' component={Modal}/>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
