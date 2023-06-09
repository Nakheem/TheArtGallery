import React from "react";

function AddCustomerForm() {
  return (
    <div className="container">
      <h1 className="text-center">Add Customer</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                name="firstName"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                name="lastName"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-primary">
              Return
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomerForm;
