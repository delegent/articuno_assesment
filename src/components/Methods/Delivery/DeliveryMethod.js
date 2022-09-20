import "./DeliveryMethod.css";
export default function DeliveryMethod() {
  return (
    <>
      <div className="payment_container">
        <p>Delivery method</p>
        <div className="methods_container">
          <div className="ditems">
            <div>
              <img
                className="inpost"
                src="https://chinapost-track.com/cdn/images/carriers/thumbnails/0072-inpost.png"
                alt=""
              />
              <p>$20.00</p>
            </div>

            <div>
              <img
                alt=""
                className="dpd"
                src="https://supersonicfood.com/wp-content/uploads/2021/04/dpd_logo.jpeg"
              />
              <p>$12.00</p>
            </div>
          </div>
          <div className="ditems">
            <div>
              <img
                alt=""
                className="dhl"
                src="https://eu.bagsvalley.cn/louisvuitton2/wp-content/uploads/2020/09/dhl-1.png"
              />
              <p>$15.00</p>
            </div>

            <div>
              <img
                alt=""
                className="fedex"
                src="https://cdn.mos.cms.futurecdn.net/SFJxCXKMZihnZsVnn3LoEk-1200-80.jpg"
              />
              <p>$10.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
