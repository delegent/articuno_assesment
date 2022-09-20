import "./Cart.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
export default function Cart() {
  return (
    <>
      <div className="carts_container">
        <p>Your cart</p>
        <div className="cart_all_items_container">
          <div className="cart-items">
            <div className="cart_item" style = {{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div className="item_name" style = {{marginRight:"50px"}}>
                <img
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                  className="cart-item-img"
                  src="https://i.pinimg.com/originals/f9/a6/66/f9a6664ab070f35b77c94f444c1f22e5.png"
                  alt=""
                />
                <div className="cart_item_text">
                  <p>
                    T-Shirt
                    <br />
                    Summer Vibes
                  </p>
                  <span style={{ color: "#111" }}>#261311</span>
                </div>
              </div>
              <div className="cart-item-price">
                <p>$89.99</p>
              </div>
            </div>

            <div className="cart_item" style = {{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div className="item_name">
                <img
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                  alt=""
                  className="cart-item-img"
                  src="https://i.pinimg.com/originals/f9/a6/66/f9a6664ab070f35b77c94f444c1f22e5.png"
                />
                <div className="cart_item_text">
                  <p>
                    Basic SLim
                    <br />
                    Fit T-Shirt
                  </p>
                  <span style={{ color: "#111" }}>#212315</span>
                </div>
              </div>
              <div className="cart-item-price">
                <p>$69.99</p>
              </div>
            </div>
            <div className="cart_total">
              <p>Total Cost</p>
              <p className="total_price" style={{ fontWeight: "bold" }}>
                $159,98
              </p>
            </div>
            <div className="cart_hero_text">
              <LocalShippingIcon style={{ fontSize: "1.2rem" }} />
              <p>
                You are <b>$30,02</b> away <br /> from free shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
