

import React, { useState } from 'react';
import '../styles/App.css';

function Odd() {
  return <h1>Odd Component</h1>;
}

function Even() {
  return <h1>Even Component</h1>;
}

function App() {
  const [isEvenVisible, setIsEvenVisible] = useState(true);

  const toggleVisibility = () => {
    setIsEvenVisible(!isEvenVisible);
  };

  const handleUnmount = (componentName) => {
    console.log(`${componentName} is unmounted`);
  };

  return (
    <div>
      {isEvenVisible ? (
        <Even />
      ) : (
        <Odd />
      )}
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isEvenVisible ? (
        <React.Fragment>
          {() => handleUnmount("Even")}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {() => handleUnmount("Odd")}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;

