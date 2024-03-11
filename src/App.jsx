import "./App.scss";
import { useEffect } from "react";
import { Shop } from "./components/shop/shop";
import { useContext } from "react";
import AppContext from "./context";

const tg = window.Telegram.WebApp;

tg.MainButton.setParams({
  text: "Send Form",
  color: "#32d032",
  text_color: "#FFF",
});

function App() {
  const { cartItems, totalPrice } = useContext(AppContext);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.MainButton.onClick(() => {
      console.log(tg);
    });
  }, []);

  if (cartItems.length > 0) {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: `Checkout ${totalPrice} $`,
    });
  } else {
    tg.MainButton.hide();
  }

  return (
    <div className="container">
      <Shop />
    </div>
  );
}

export default App;
