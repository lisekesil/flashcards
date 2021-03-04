import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="wrapper-nav">
            <Link to="/">
                <h1 className="logo">Flashcards</h1>
            </Link>
            <nav className="navbar">
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/create">Create</NavLink>
                <NavLink to="/add">Add</NavLink>
                {/* <NavLink to="/delete">Delete</NavLink> */}
            </nav>
        </div>
    );
};

export default Navbar;
