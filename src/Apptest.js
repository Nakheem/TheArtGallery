import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerList from "./CustomerList";
import AddCustomerForm from "./AddCustomerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
