import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import customerCSV from "./Data/Customer.csv";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CustomerList() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(customerCSV);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const { data } = Papa.parse(csv, { header: true });
      setCustomerData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1> CustomerList</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="w- 25"> First Name </th>
            <th className="w- 25"> Last Name </th>
            <th className="w- 25"> Email</th>
            <th className="w- 25">
              <Link to="/add-customer">
                <button>Add</button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (
            <tr key={index}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.Email}</td>
              <td>
                <button> Edit</button>
              </td>
              <td>
                <button> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
