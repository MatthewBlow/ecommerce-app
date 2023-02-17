import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";
import Invoice from "../components/Invoice";

const Success = () => {
  const {state} = useLocation();
  //in Cart.jsx I sent data and cart
  const { stripeData, products } = state
 // const data = location.state.stripeData;
 // const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch() 
  const [order, setOrder] = useState({})

  console.log(stripeData);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: products.products.map((item) => ({
            productName: item.title,
            productId: item._id,
            quantity: item._quantity,
            price: item.price
          })),
          amount: products.total,
          address: stripeData.billing_details.address,
        });
        setOrder(res.data)
        setOrderId(res.data._id);
        dispatch(clearCart(state))
      } catch (error) {
        console.log(error)
      }
    };
    stripeData && createOrder();
  }, [products, stripeData, currentUser, dispatch, state]); 

  return (
    <Invoice order={order} />
  );
};

export default Success;