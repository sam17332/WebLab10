import React from 'react';
import './App.css'
import Radar from './Componentes/Radar';

class App extends React.Component{
  render(){
    return (
      <div>
        <div className="App">
          <Radar/>
        </div>
      </div>
    )
  }
}
export default App;
