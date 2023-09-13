
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ViewEventsStudent from './components/ViewEventsStudent.js';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<ViewEventsStudent/>} />
        </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
