import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="wrapper-nav">
            <h1 className="logo">Flashcards</h1>
            <nav className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/create">CREATE</Link>
                <Link to="/add">ADD</Link>
            </nav>
        </div>
    );
};

export default Navbar;
