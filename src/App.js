//to use JSX sintax (like html inside js file, needs import React from "react")
import React from 'react';
import './App.css';

import reactJS from './assets/reactjs.jpg';

function App() {
  return (
    <div>
      <img src={reactJS} />
      running...
    </div>
  );
}

export default App;
