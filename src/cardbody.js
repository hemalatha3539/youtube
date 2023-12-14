import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './sidebar';
import MainContainer from './main-container';

const Cardbody=()=>{
  return <div className='cardbody'>
    <Sidebar/>
    <MainContainer/>
    
  </div>

}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
    
//     <Cardbody />
// );
export  default Cardbody

