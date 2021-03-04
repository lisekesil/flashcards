import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="wrapper-nav">
            <h1 className="logo">Flashcards</h1>
            <nav className="navbar">
                <Link to="/">home</Link>
                <Link to="/create">create</Link>
                <Link to="/add">add</Link>
            </nav>
        </div>
    );
};

export default Navbar;
