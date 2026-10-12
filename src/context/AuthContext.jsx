import {
  createContext,
  useContext,
  useState,
} from "react";

import avatarImage from "../assets/images/avatar.jpg";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: "Anna",
    email: "anna@example.com",
    avatar: avatarImage,
  });

  function login() {
    setUser({
      id: 1,
      name: "Anna",
      email: "anna@example.com",
      avatar: avatarImage,
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}