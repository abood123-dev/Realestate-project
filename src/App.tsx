import React from 'react';
import './App.css';
import { HashRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Listing' element={<Listing/>} />
      </Routes>
    </Router>
    
  );
}
// Remove-Item -Recurse -Force docs
export default App;
