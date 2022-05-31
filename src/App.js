import React from 'react';
import './App.css';

import { Link } from 'react-router-dom'; 
import ButtonAppBar from './components/ButtonAppBar';
import MultiActionAreaCard from './components/MultiActionAreaCard';

function App() {
  return (
    
    <div className='Pai'>

      <ButtonAppBar></ButtonAppBar>
      
      <div className="Card">
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
      </div>

      <div className="Card">
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
        <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
      </div>

      <div>
        <Link to="/login">Página de Login</Link> 
      </div>
      
    </div>
    
  );
}

export default App;
