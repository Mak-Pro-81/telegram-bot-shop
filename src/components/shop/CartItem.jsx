import { Button } from "antd";
import TrashIcon from "../../../public/images/trash-icon.svg?react";
import { useContext } from "react";
import AppContext from "../../context";

export const CartItem = ({ head, data, count }) => {
  const { removeItem } = useContext(AppContext);

  return head ? (
    <div className="cart__item head">
      <div className="cart__item_num">#</div>
      <div className="cart__item_image">Image</div>
      <div className="cart__item_title">Title</div>
      <div className="cart__item_qty">Qty</div>
      <div className="cart__item_price">Price</div>
      <div className="cart__item_actions">
        <span>
          <TrashIcon />
        </span>
      </div>
    </div>
  ) : (
    <div className="cart__item">
      <div className="cart__item_num">{data.id}</div>
      <div className="cart__item_image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="cart__item_title">{data.title}</div>
      <div className="cart__item_qty">{count}</div>
      <div className="cart__item_price">{data.price * count} $</div>
      <div className="cart__item_actions">
        <Button
          icon={<TrashIcon />}
          style={{
            border: "0 none",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
          onClick={() => removeItem(data.id)}
        ></Button>
      </div>
    </div>
  );
};
