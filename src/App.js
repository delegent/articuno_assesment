import "./styles.css";
import Methods from "./components/Methods/Methods";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Cartprocess from "./components/Cartprocess/Cartprocess";
import { Footer, Cart } from "./components/index";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Cartprocess />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Form />

        <Methods />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}
