import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <header>
            <nav>
                <div id="nav-logo">
                    <h1>Potlucky</h1>
                </div>
                <div></div>
                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/signin'>SignIn</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/newevent'>Create Event</Link>
                </div>
            </nav>
        </header>

    )
}

export default NavBar


// <main>
// <Route path='/' element={ <Home /> } />
// <Route path='/register' element= { <Register /> } />
// <Route path='/login' element= { <SignIn /> } />
// <Route path='/newevent' element= { <NewEvent /> } />
// <Route path='/profile' element= { <Profile /> } />