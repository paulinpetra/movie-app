import { Link } from "react-router-dom";
import "../App.css";

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <Link to="/">Search Movies</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
