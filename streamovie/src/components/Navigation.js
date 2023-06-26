import { NavLink } from "react-router-dom";
// import { styled } from 'styled-components'

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" className="navActive">
              <i className="fas fa-home"></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/likes" className="navActive">
              <i className="fas fa-heart"></i>
              <span>Likes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
