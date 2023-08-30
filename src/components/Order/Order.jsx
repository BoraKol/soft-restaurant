import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrders } from "../redux/actions/orderActions";

const Order = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/path/to/orders"); 
      const data = await response.json();
      dispatch(setOrders(data));
    } catch (error) {
      console.error("Sipariş verileri çekilemedi.", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Geçmiş Siparişler</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Ürün: {order.productName}, Adet: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;