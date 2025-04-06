import React from 'react';
import './App.css';
import { HashRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Details from './pages/Details';
import Visits from './pages/Visits';
function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Listing' element={<Listing/>} />
       <Route path='/Details/:id' element={<Details/>} />
       <Route path='/Visits' element={<Visits/>} />
      </Routes>
    </Router>
    
  );
}
// Remove-Item -Recurse -Force docs
export default App;
