import PaymentMethod from "./Payment/PaymentMethod";
import DeliveryMethod from "./Delivery/DeliveryMethod";
export default function Methods() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "120px"
        }}
      >
        <PaymentMethod />
        <DeliveryMethod />
      </div>
    </>
  );
}
