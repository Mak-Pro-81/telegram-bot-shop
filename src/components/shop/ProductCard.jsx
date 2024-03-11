import { useContext } from "react";
import { Button, Badge } from "antd";
import AppContext from "../../context";

export const ProductCard = (data) => {
  const { id, image, title, price } = data;
  const { handleTotal, addItem, cartItems } = useContext(AppContext);

  const currentItem = cartItems.find((i) => i.item.id === id);
  const count = currentItem?.count || 0;

  const handleCount = () => {
    handleTotal(price);
    addItem(data, count + 1);
  };

  return (
    <div className="product__card">
      {count > 0 && (
        <Badge
          count={count}
          color="limegreen"
          className="product__card_count"
        />
      )}
      <div className="product__card_image">
        <img src={image} alt={title} />
      </div>
      <div className="product__card_info">
        <h6 className="product__card_title">{title}</h6>
        <div className="product__card_price">{price} $</div>
      </div>
      <div className="product__card_actions">
        <Button
          value="large"
          type="primary"
          style={{ minWidth: "100px", fontFamily: "inherit", fontWeight: 600 }}
          onClick={handleCount}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};
