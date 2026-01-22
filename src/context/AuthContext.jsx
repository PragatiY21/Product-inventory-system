import { createContext, useContext, useState } from "react";
import users from "../data/users.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = (username, password) => {
    setLoading(true);

    setTimeout(() => {
      const foundUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!foundUser) {
        setError("Invalid credentials");
        setLoading(false);
        return;
      }

      const fakeToken = "jwt-token-12345";

      const userData = {
        username: foundUser.username,
        role: foundUser.role,
        token: fakeToken
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setError("");
      setLoading(false);
    }, 1000);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
