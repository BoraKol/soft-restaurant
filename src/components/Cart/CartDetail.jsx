// import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as cartActions from "../../redux/actions/cartAction"
// import { bindActionCreators } from "redux";
// import alertify from "alertifyjs"
// import { Link } from "react-router-dom";

// import { Table, Button } from "reactstrap";
// class CartDetail extends Component {
//   removeFromCart(product) {
//     this.props.actions.removeFromCart(product);
//     alertify.error(product.productName + " sepetten silindi!",2);
//   }
//   render() {
//     return (
//       <div>
//         <Table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Product Name</th>
//               <th>Unit Price</th>
//               <th>Quantity</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.cart.map(cartItem => (
//               <tr key={cartItem.product.id}>
//                 <th scope="row">{cartItem.product.id}</th>
//                 <td>{cartItem.product.productName}</td>
//                 <td>{cartItem.product.unitPrice}</td>
//                 <td>{cartItem.product.quantity}</td>
//                 <td>
//                   <Button
//                     color="danger"
//                     onClick={() => this.removeFromCart(cartItem.product)}
//                   >
//                     sil
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <Link to="/delivery">
//       <button className= "bg-red-500 px-6 py-3 text-white poppins rounded-full  focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">Satın Al</button>
//       </Link>
//       </div>

     
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     cart: state.cartReducer
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
//     }
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartDetail);