import React, { useState } from 'react';
import Kaioken from './Kaioken';
import SuperSaiyan from './Super';

const App = () => {
  const [transformation, setTransformation] = useState('Kaioken');

  const toggleTransformation = () => {
    setTransformation((prevTransformation) =>
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Goku's Transformation App</h1>
      {transformation === 'Kaioken' ? <Kaioken /> : <SuperSaiyan />}
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  );
};

export default App;