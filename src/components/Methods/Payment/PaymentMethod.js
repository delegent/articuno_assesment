import "./PaymentMethod.css";
export default function PaymentMethod() {
  return (
    <>
      <div className="payment_container">
        <p>Payment method</p>
        <div className="methods_container">
          <div className="items">
            <img
              className="paypal"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
              alt=""
            />
            <img
              className="visa"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfobg_cM2eQaU42AoNR9FbQYpgPkmO_hEpjqLlPm5fmz3sslvMcKvDtszs3Rq_b8x7_mM&usqp=CAU"
              alt=""
            />
            <img
              className="mastercard"
              src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960"
              alt=""
            />
          </div>
          <div className="items">
            <img
              alt=""
              src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960"
            />
            <img
              alt=""
              src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"
            />
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/IDEAL_Logo.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
