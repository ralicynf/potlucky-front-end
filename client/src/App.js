import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import Profile from './pages/Profile';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element= { <Register /> } />
        <Route path='/login' element= { <Login /> } />
        <Route path='/newevent' element= { <NewEvent /> } />
        <Route path='/profile' element= { <Profile /> } />
        
      </main>
    </div>
  );
}

export default App;
