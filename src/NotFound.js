import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    });

    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            Go back to the <Link to='/'>homepage</Link>
        </div>
    );
}

export default NotFound;