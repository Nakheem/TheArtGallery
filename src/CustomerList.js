import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function CustomerList() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {

        const firestore = firebase.firestore();
        const collectionRef = firestore.collection('Customers');
        const snapshot = await collectionRef.get();
        const customer = snapshot.docs.map((doc) => doc.data());
        setCustomerData(customer);
      }
      catch(error) {
        console.error("Error fetching customer data")
      }
    };
    fetchCustomerData();
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
              <td>{customer.FirstName}</td>
              <td>{customer.LastName}</td>
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
