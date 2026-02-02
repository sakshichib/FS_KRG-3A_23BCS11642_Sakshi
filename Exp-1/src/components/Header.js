import {Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Header = () => {
    const { isAuthenticated, setIsAuthenticated } = UserAuth();

        return (
            <header style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white' }} >
                <h1>EcoTrack</h1>
                <nav>
                    <Link to="/" Style = {{ color: 'white', marginRight: '1rem' }} > Dashboard </Link>
                    <Link to="/" Style = {{ color: 'white', marginRight: '1rem' }} > Logs </Link>
                    <Link to="/" Style = {{ color: 'white', marginRight: '1rem' }} > Login </Link>
                </nav>
            </header>
        );
};

export default Header;
    