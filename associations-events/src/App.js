import NavigationVar from './components/NavigationVar';
import './App.css';
import logo2 from './assets/logo.png';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <NavigationVar/>
      <div className='screen-view'>
        <Login/>
        <div className='main-image'>
          <div className='main-logo'>
            <img src={logo2} alt="Logo"/>
          </div>
        </div>
      </div>
      
        
  
    </div>
  );
}

export default App;
