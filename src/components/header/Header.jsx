import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const {pathname}= useLocation()
    console.log(pathname);
    
    return (
        <header className="header">
            <div className="logo">
                <img src="/src/assets/logo.png" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link className= {pathname==="/"?"linkHover":""} to = "/">Accueil</Link></li>
                    <li><Link className= {pathname==="/about-us"?"linkHover":""} to = "/about-us">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
