import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import CourseList from './components/CourseList';

class App extends Component {
  render() {
    return (
     <div>
      <Navbar/>
      <CourseList/>
     </div>
    );
  }
}

export default App;
