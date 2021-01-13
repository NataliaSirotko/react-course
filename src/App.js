import React from 'react';
import './index.css';
import Card from './Card';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card className="block" caption="Caption" text="Text..."></Card>
      <Card className="block" caption="Caption" text="Text..."></Card>
    </div>
  );
}

export default App;
