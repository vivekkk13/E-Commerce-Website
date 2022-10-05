import React, { useContext, useEffect, useState } from "react";
import { ProductlistContext } from "../App";
import { DashboardLayout } from "./DashboardLayout";
import Sidebar from "./sidebar";

export const Products = () => {
  const { productlist, setproductList } = useContext(ProductlistContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setproductList(productlist.filter((list) => list.name.includes(search)));
    console.log("productlist ==> ", search);
  }, [search]);

  return (
    <DashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 ps-0">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div className="featuess">
              <div class="input-group rounded search_bar">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <div className="container">
                <div className="row">
                  {productlist.map((item) => (
                    <div className="col-lg-3">
                      <div className="features-service">
                        <div className="features-content">
                          <div className="cards-iphonee">
                            <div className="cards-space">
                              <img
                                src={item.img}
                                width="100%"
                                className="img-iphone"
                              />
                              <div className="card-footer">
                                <small>{item.name}</small>
                                <small>${item.price}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
