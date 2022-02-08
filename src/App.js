import './App.css';
// import Routes from './routes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Dashboard/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/Home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
