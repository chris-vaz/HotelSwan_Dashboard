import React from 'react'
import SideBar from './pages/SideBar';
import ActionBar from './pages/ActionBar';
import MainBar from './pages/MainBar';
import index from './index.css'

function App() {
  return (
    <div className="App">
      <SideBar/>
      <MainBar/>
      <ActionBar/>
    </div>
  );
}

export default App;
