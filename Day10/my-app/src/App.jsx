
import React from 'react'
import Movielist from './Movielist'

const App = () => {
  return (
    <div >
      <h1 style={{
      backgroundColor:"black",
      color:"white",
      textAlign:"center"
    }}>Netflix Clone App</h1>
    
    <Movielist />
    </div>
  );
};

export default App;
