import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Parrot Blog</h1>
            <div className="link">
                <Link to="/" className='werey'>Home</Link>
                <Link to="/create" className='werey' style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;