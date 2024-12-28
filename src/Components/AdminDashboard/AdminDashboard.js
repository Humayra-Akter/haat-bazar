import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 p-4 min-h-screen">
        <ul className="menu">
          <li>
            <Link
              className="text-white text-base font-bold hover:text-black"
              to="/adminDashboard"
            >
              <span className="flex gap-4">Dashboard</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 text-base font-bold hover:text-black"
              to="/adminDashboard/adminCreate"
            >
              <span className="flex gap-4">Overview</span>
            </Link>
          </li>{" "}
          <hr />
          <li>
            <Link
              className="text-white mt-3 text-base font-bold hover:text-black"
              to="/adminDashboard/moneyTransaction"
            >
              <span className="flex gap-4">Money Transaction</span>
            </Link>
          </li>{" "}
          <hr />
          <li>
            <Link
              className="text-white mt-3 text-base font-bold hover:text-black"
              to="/adminDashboard/products"
            >
              <span className="flex gap-4">Products</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 text-base font-bold hover:text-black"
              to="/adminDashboard/sellers"
            >
              <span className="flex gap-4">Sellers</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 text-base font-bold hover:text-black"
              to="/adminDashboard/complaints"
            >
              <span className="flex gap-4">Complaints</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
