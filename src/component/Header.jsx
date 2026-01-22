import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-left">
        <h3>Product Inventory</h3>
      </div>

      <div className="header-right">
        {user && (
          <>
            <span className="user-info">
              {user.username} ({user.role})
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
