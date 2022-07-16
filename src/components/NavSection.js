import {
  NavLink,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import './navsection.scss';

export default function NavSection() {
  return (
    <div className="header">
      <div className="container d-flex">
        <nav>
          <h1><a href="/" className="logoLink">Bookstore CMS</a></h1>
          <ul>
            <li>
              <NavLink to="/Books">
                BOOKS
              </NavLink>
            </li>
            <li>
              <NavLink to="/Categories">
                CATEGORIES
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="profile"><FaUser /></div>
      </div>
    </div>
  );
}
