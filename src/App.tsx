import React from 'react';
import './App.css';
import { HashRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    
  );
}
// Remove-Item -Recurse -Force docs
export default App;
