// import React from "react";
// import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";
// import { useDispatch, useSelector } from "react-redux";
// import * as cartActions from "../../redux/actions/cartAction";
// import { Link } from "react-router-dom";
// import alertify from "alertifyjs";

// const CartSummary = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const removeFromCart = (product) => {
//     dispatch(cartActions.removeFromCart(product));
//     alertify.error(`${product.productName} sepetten silindi!`, 2);
//   };

//   const renderEmpty = () => (
//     <div>Sepetiniz boş</div>
//   );

//   const renderSummary = () => (
//     <UncontrolledDropdown nav inNavbar>
//       <DropdownToggle nav caret>
//         Sepetiniz
//       </DropdownToggle>
//       <DropdownMenu right>
//         {cartItems.map((cartItem) => (
//           <DropdownItem key={cartItem.product.id}>
//             <Badge onClick={() => removeFromCart(cartItem.product)} color="danger">-</Badge>{" "}
//             {cartItem.product.productName}{" "}
//             <Badge color="success">{cartItem.quantity}</Badge>
//           </DropdownItem>
//         ))}

//         <DropdownItem divider />
//         <DropdownItem tag={Link} to="/cart">Sepete Git</DropdownItem>
//       </DropdownMenu>
//     </UncontrolledDropdown>
//   );

//   return (
//     <div>
//       {cartItems.length > 0 ? renderSummary() : renderEmpty()}
//     </div>
//   );
// };

// export default CartSummary;