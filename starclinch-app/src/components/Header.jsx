import { NavLink, Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import '../css/Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/"> <img id='org-logo' src={"https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png"} alt="Logo" /></Link>
        <h2 id='org-name'>StarClinch</h2>
      </div>
      <nav>
        <ul>
        <li><NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink></li>
        <li><NavLink to="/services" activeClassName="active" className="nav-link">Services</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink></li>
      </ul>
        <div className="menu">
        <BurgerMenu right>
            <div className="column">
              <Link to="/" activeClassName="active" className="menu-item">Home</Link>
            </div>
            <div className="column">
              <Link to="/about" activeClassName="active" className="menu-item">About</Link>
            </div>
            <div className="column">
              <Link to="/services" activeClassName="active" className="menu-item">Services</Link>
            </div>
            <div className="column">
              <Link to="/contact" activeClassName="active" className="menu-item">Contact</Link>
            </div>
          </BurgerMenu>
        </div>
      </nav>
    </header>
  );
}
export default Header
