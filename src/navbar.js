import React from 'react';
import ReactDOM from 'react-dom/client';
const Navbar=()=>{
    return <div className='navbar'>
       <div>
        <img className='ham' src='https://tse3.mm.bing.net/th?id=OIP.3oWC_8moLxKDTYSSdd_ELAHaHa&pid=Api&P=0&h=220'></img>
        <img className='utube' src='https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=220'></img>
       </div>
       <div className='middle' >  
        <input className='search' placeholder='search'></input>
        <button className='search-btn'><i class="bi bi-search"></i></button>
        <div className='se'>
        <button className='mic-btn'><img className='mic' src='https://tse2.mm.bing.net/th?id=OIP._W-6ekQhkAov2r_kNfHHWwHaHa&pid=Api&P=0&h=220'></img></button>
        </div>
        
       </div>
       <div className='edge'>
        <img className='vedio' src='https://tse1.mm.bing.net/th?id=OIP.4LKZ2qGIwjwymxVLIPzwCAAAAA&pid=Api&P=0&h=220'></img>
        <img className='bell' src='https://tse1.mm.bing.net/th?id=OIP._aYCpJSDhj1EfVz0Eojo7QAAAA&pid=Api&P=0&h=220'></img>
        <img className='person' src='https://tse4.mm.bing.net/th?id=OIP.E6EMy8EyJeOKudi2Z0YK0wHaFP&pid=Api&P=0&h=220'></img>
       </div>

    </div>
  
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   
      <Navbar />
   
  );
  export default Navbar
  