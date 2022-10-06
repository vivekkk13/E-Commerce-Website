import React, { useContext, useEffect, useState } from "react";
import { DashboardLayout } from "./DashboardLayout";
import img4 from "../assets/images/img4.jpg";
import { ProductlistContext } from "../App";
import swal from "sweetalert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { productlist, setproductList, cartlength, setCartLength } =
    useContext(ProductlistContext);
  const [deleteItem, setDeleteItem] = useState("");
  let navigate = useNavigate();
  const handleDelete = (list) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want delete an item",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCartLength(cartlength.filter((data) => data.id != list.id));
        toast("Deleted Successfully");
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const handleCartEmpty = () => {
    swal({
      title: "Are you sure?",
      text: "You Want to empty your Cart",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCartLength([]);
      }
    });
  };
  return (
    <DashboardLayout>
      <>
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="cart_heading">
              <img src={img4} />
              <h5>Cart Items</h5>
            </div>
            <div>
              <table className="cart_table">
                <tr>
                  <th>ITEM</th>
                  <th>PRICE</th>
                  <th>NAME</th>
                  <th>Quantity</th>
                  <th>PRICE</th>
                  <th>REMOVE</th>
                </tr>
                {cartlength.length && cartlength.length > 0 ? (
                  <>
                    {cartlength.map((list) => (
                      <tr>
                        <td>
                          <img src={list.img} className="carty_img" />
                          {list.company}
                        </td>
                        <td> {list.price}</td>
                        <td>{list.name}</td>
                        <td>
                          <div className="add-minus">
                            <div>
                              <i className="fas fa-minus"></i>
                              <input
                                type="text"
                                placeholder="0"
                                className="quantity_input"
                              />
                              <i className="fas fa-plus add" />
                            </div>
                          </div>
                        </td>
                        <td>{list.price}</td>
                        <td className="text-center">
                          <i
                            class="fa fa-trash cart_hover"
                            id="delete_icon"
                            aria-hidden="true"
                            onClick={() => {
                              handleDelete(list);
                            }}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="no_data">No Item in cart</div>
                  </>
                )}
              </table>
              <div className="cart_btns">
                <button
                  className="btn btn-secondary btn_secondary"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                </button>
                <button
                  className="btn btn-secondary btn_secondary"
                  onClick={() => {
                    handleCartEmpty();
                  }}
                >
                  Empty Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    </DashboardLayout>
  );
};
