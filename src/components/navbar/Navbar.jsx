import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex space-x-3 font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"} className="text-white">
          Home
        </Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"} className="text-white">
          All Product
        </Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"} className="text-white">
            Signup
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/login"} className="text-white">
            Login
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"} className="text-white">
            User
          </Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} className="text-white">
            Admin
          </Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="text-white cursor-pointer" onClick={logout}>
          logout
        </li>
      )}

      {/* Cart */}
      <li>
        <Link to={"/cart"} className="text-white">
          Cart({cartItems.length})
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-primary-blue  sticky top-0 z-10">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link
            to="/"
            className="font-semibold relative text-xl sm:text-3xl text-white"
          >
            <span className="text-white before:content-[''] before:bg-my-yellow before:absolute before:-top-[2px] before:h-[3px] before:sm:h-1 before:w-4 before:sm:w-6">
              Da
            </span>
            sh
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
