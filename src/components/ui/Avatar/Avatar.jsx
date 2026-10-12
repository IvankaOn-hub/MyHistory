import { useState } from "react";

import { useAuth } from "../../../context/AuthContext";

import "./Avatar.css";

function Avatar({
  src,
  alt = "Avatar",
  size = "md",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    user,
    login,
    logout,
    isLoggedIn,
  } = useAuth();

  const avatarSrc = user?.avatar || src;
  const avatarAlt = user?.name || alt;

  function handleToggleMenu() {
    setIsOpen((previousValue) => !previousValue);
  }

  function handleLogin() {
    login();
    setIsOpen(false);
  }

  function handleLogout() {
    logout();
    setIsOpen(false);
  }

  return (
    <div className="avatar-wrapper">
      <button
        className={`avatar avatar--${size}`}
        type="button"
        onClick={handleToggleMenu}
        aria-label="Otwórz menu użytkownika"
        aria-expanded={isOpen}
      >
        {avatarSrc ? (
          <img
            className="avatar__image"
            src={avatarSrc}
            alt={avatarAlt}
          />
        ) : (
          <span className="avatar__placeholder">
            ?
          </span>
        )}
      </button>

      {isOpen && (
        <div className="avatar-menu">
          {isLoggedIn ? (
            <>
              <div className="avatar-menu__user">
                <strong>{user.name}</strong>

                {user.email && (
                  <span>{user.email}</span>
                )}
              </div>

              <div className="avatar-menu__divider" />

              <button
                className="avatar-menu__item"
                type="button"
              >
                Mój profil
              </button>

              <button
                className="avatar-menu__item"
                type="button"
              >
                Ustawienia
              </button>

              <div className="avatar-menu__divider" />

              <button
                className="avatar-menu__item avatar-menu__item--danger"
                type="button"
                onClick={handleLogout}
              >
                Wyloguj
              </button>
            </>
          ) : (
            <button
              className="avatar-menu__item"
              type="button"
              onClick={handleLogin}
            >
              Zaloguj
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Avatar;