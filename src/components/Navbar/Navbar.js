import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <div class="nav_logo">
          <img src="/images/logo.png" />
        </div>
        <div class="nav_link_container">
          <a className="nav_link">Men</a>
          <a className="nav_link">Women</a>
          <a className="nav_link">Kids</a>
        </div>
        <div className="nav_icons_container">
          <SearchIcon className="function_links" />
          <ShoppingCartIcon className="function_links" />
          <PersonIcon className="function_links" />
        </div>
      </div>
    </>
  );
}
