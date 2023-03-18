import './App.css';
import LoginPage from './LoginPage';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
