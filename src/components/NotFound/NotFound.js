import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="content">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">
                <button className="not-found__btn">Back to home page</button>
            </Link>
        </div>
    );
};

export default NotFound;
