import React from 'react';
import { useHistory } from 'react-router-dom';

function Background() {
  const history = useHistory();

  function handleClick(page) {
    history.push(page);
  }

  return (
    <div className="background">
      <div className="clickable-areas">
        <div className="area1" onClick={() => handleClick('/Alphabet')}></div>
        <div className="area2" onClick={() => handleClick('/Animals')}></div>
        <div className="area3" onClick={() => handleClick('/Painting')}></div>
        <div className="area4" onClick={() => handleClick('/Shapes')}></div>
        <div className="area5" onClick={() => handleClick('/Weather')}></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Background />
    </div>
  );
}

export default Background