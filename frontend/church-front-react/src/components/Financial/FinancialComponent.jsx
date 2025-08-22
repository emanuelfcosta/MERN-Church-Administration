import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFinancial } from "../../services/FinancialService";

const FinancialComponent = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [theDate, setTheDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    type: "",
    description: "",
    amount: "",
    theDate: "",
    paymentMethod: "",
  });

  function saveFinancial(e) {
    e.preventDefault();

    if (validateForm()) {
      const financial = {
        type,
        description,
        amount,
        theDate,
        paymentMethod,
      };

      // console.log(financial);

      createFinancial(financial)
        .then((response) => {
          console.log(response.data);
          navigator("/financial");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (type.trim()) {
      errorsCopy.type = "";
    } else {
      errorsCopy.type = "Type is required";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required";
      valid = false;
    }

    if (amount && !isNaN(amount) && amount > 0) {
      errorsCopy.amount = "";
    } else {
      errorsCopy.amount = "Amount is required and must be a positive number";
      valid = false;
    }

    if (theDate) {
      errorsCopy.theDate = "";
    } else {
      errorsCopy.theDate = "Date is required";
      valid = false;
    }

    if (paymentMethod.trim()) {
      errorsCopy.paymentMethod = "";
    } else {
      errorsCopy.paymentMethod = "Payment Method is required";
      valid = false;
    }

    setErrors(errorsCopy);

    console.log(errorsCopy);

    return valid;
  } //validateForm

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          <h2 className="text-center">Add Cash Flow</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Type:</label>
                <select
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={`form-control ${errors.type ? "is-invalid" : ""}`}
                >
                  <option value="">Select Type</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description:</label>
                <textarea
                  name="description"
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`form-control ${
                    errors.description ? "is-invalid" : ""
                  }`}
                ></textarea>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Amount:</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`form-control ${
                    errors.amount ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.amount && (
                  <div className="invalid-feedback">{errors.amount} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Date:</label>
                <input
                  type="date"
                  name="theDate"
                  value={theDate}
                  onChange={(e) => setTheDate(e.target.value)}
                  className={`form-control ${
                    errors.theDate ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.theDate && (
                  <div className="invalid-feedback">{errors.theDate} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Payment Method:</label>
                <select
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className={`form-control ${
                    errors.paymentMethod ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select Payment Method</option>
                  <option value="Cash">Cash</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
                {errors.paymentMethod && (
                  <div className="invalid-feedback">{errors.paymentMethod}</div>
                )}
              </div>

              <button className="btn btn-success" onClick={saveFinancial}>
                {" "}
                Save{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialComponent;
