import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Loader } from "../loader";
import { CartItem } from "./CartItem";
import { Tabs, Badge, Button } from "antd";
import { API_URL, ITEMS_LIMIT } from "../../constants";
import { useContext } from "react";
import AppContext from "../../context";
import { fetchData } from "../../helpers";

const CartLabel = ({ count }) => (
  <div>
    Cart <Badge count={`${count} $`} showZero color="tomato" />
  </div>
);

export const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { totalPrice, cartItems } = useContext(AppContext);

  const getMore = () => {
    setPageLoading(true);
    setPage((p) => p + 1);
    fetchData(`${API_URL}/shop/?p=${page + 1}&l=${ITEMS_LIMIT}`).then(
      (data) => {
        setTimeout(() => {
          setProducts([...products, ...data]);
          setPageLoading(false);
          !data.length && setMore(false);
        }, 500);
      }
    );
  };

  useEffect(() => {
    fetchData(`${API_URL}/shop/?p=${page}&l=${ITEMS_LIMIT}`).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="shop">
      <Tabs
        type="card"
        animated={{ tabPane: true }}
        items={[
          {
            key: "1",
            label: "Shop",
            children: loading ? (
              <Loader />
            ) : (
              <>
                <div className="products__grid">
                  {products.map((product) => (
                    <div key={product.id} className="products__grid_column">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
                {more && (
                  <div className="more__box">
                    <Button
                      type="primary"
                      size="large"
                      style={{ fontWeight: 600, minWidth: "140px" }}
                      onClick={getMore}
                      loading={pageLoading}
                    >
                      Get More
                    </Button>
                  </div>
                )}
              </>
            ),
          },
          {
            key: "2",
            label: <CartLabel count={totalPrice} />,
            children:
              cartItems.length > 0 ? (
                <div>
                  <CartItem head />
                  {cartItems.map((data) => (
                    <CartItem
                      key={data.item.id}
                      data={data.item}
                      count={data.count}
                    />
                  ))}
                </div>
              ) : (
                <p>Cart is Empty...</p>
              ),
          },
        ]}
      />
    </div>
  );
};
