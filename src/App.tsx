import React from 'react';
import logo from './logo.svg';
import './App.css';
import { slides, slides2 } from './data';
import EventsSection from './components/EventsSection';

function App() {
  return (
    <div className="App">
      <EventsSection slides={slides}/>
      <EventsSection slides={slides2}/>
    </div>
  );
}

export default App;
