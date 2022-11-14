import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SignIn from './pages/Signin';
import { Routes, Route } from 'react-router-dom'
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element= { <Register /> } />
          <Route path='/login' element= { <SignIn /> } />
          <Route path='/newevent' element= { <NewEvent /> } />
          <Route path='/profile' element= { <Profile /> } />
          <Route path='/event' element= { <EventDetails /> } /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
