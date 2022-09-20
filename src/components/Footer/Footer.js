import "./Footer.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export default function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_back_btn_container">
          <p><KeyboardBackspaceIcon style = {{marginRight:"7px"}} />back</p>
        </div>
        <div className="footer_btns_container">
          <button>continue shopping</button>
          <button style = {{background:"#27d18d",color:"#fff"}} className="btn payment-btn">Proceed to payment</button>
        </div>
      </div>
    </>
  );
}
