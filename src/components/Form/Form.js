import "./Form.css";
import { useState, useRef } from "react";
import auth from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Form() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function login() {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(credentials);
      alert("Logged In SuccessFully");
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <>
      <div className="form_container">
        <h3 className="form_heading">Shipping and Payment</h3>
        <div className="form_btn_container">
          <button className="form_login_btn form_btn" onClick={login}>
            Log in
          </button>
          <button className="form_signup_btn form_btn">Sign up</button>
        </div>

        <p className="form_text">Shipping Information</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form_input_group">
            <input
              className="input"
              type="email"
              ref={emailRef}
              placeholder="Email"
            />
            <input
              className="input"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </div>
          <div className="form_input_group">
            <input className="input" type="text" placeholder="Full Name" />
            <input className="input" type="text" placeholder="City" />
          </div>
          <div className="form_input_group">
            <input className="input" type="text" placeholder="Last Name" />
            <input
              className="input"
              type="text"
              placeholder="Postal Code / ZIP"
            />
          </div>
          <div className="form_input_group">
            <input className="input" type="text" placeholder="Phone number" />
            <input className="input" type="text" placeholder="Poland" />
          </div>
        </form>
      </div>
    </>
  );
}
