import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import Home from './Home';
import './index.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Tambahkan rute-rute yang sudah ada di sini */}
        <Route path="/" Component={Home}/>
        <Route path="/chat" Component={ChatRoom}/>
      </Routes>
    </Router>
  );
}

export default App;