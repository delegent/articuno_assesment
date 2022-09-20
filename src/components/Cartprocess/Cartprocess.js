import "./Cartprocess.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RvHookupIcon from "@mui/icons-material/RvHookup";
export default function Cartprocess() {
  return (
    <>
      <div className="cart_container">
        <ShoppingCartIcon className="cart_icon" />
        <span></span>
        <RvHookupIcon className="truck_icon" />
      </div>
    </>
  );
}
