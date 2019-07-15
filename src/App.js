//to use JSX sintax (like html inside js file, needs import React from "react")
import React from 'react';
import './App.css';

import TechList from './components/TechList';

import reactJS from './assets/reactjs.jpg';

function App() {
  return (
    <>
      <img src={reactJS} />
      running...
      <TechList />
    </>
  );
}

export default App;
