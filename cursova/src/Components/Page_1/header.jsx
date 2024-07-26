import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="menu_div">
        <ul className="header_menu">
          <li className="header_menu_item_left">Football world cup</li>
          <li className="header_menu_item">
            <Link to="/home">Home</Link>
          </li>
          <li className="header_menu_item">
            <Link to="/group">Groups</Link>
          </li>
          <li className="header_menu_item">
            <Link to="/playoffs">Playoffs</Link>
          </li>
          <li className="header_menu_item">
            <Link to="/schedule">Schedule</Link>
          </li>
          <li className="header_menu_item">
            <Link to="/teams">Teams</Link>
          </li>
          <li className="header_menu_item">
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
