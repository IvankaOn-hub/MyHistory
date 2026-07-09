import { NavLink } from "react-router-dom";

import "./Navigation.css";

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Wspomnienia", href: "/memories" },
  { id: 3, label: "Ulubione", href: "/favorites" },
  { id: 4, label: "Kategorie", href: "/categories" },
];

function Navigation({ isOpen }) {
  return (
    <nav className={`navigation ${isOpen ? "navigation--open" : ""}`}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.href}
          className={({ isActive }) =>
            `navigation__link ${
              isActive ? "navigation__link--active" : ""
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;