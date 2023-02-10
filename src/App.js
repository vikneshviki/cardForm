import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [formList, setFormList] = useState([]);
  const [error, setError] = useState(false);
  const handleAdd = (event) => {
    event.preventDefault();
    console.log("add function", { name, age, phone });
    if (name && age && phone) {
      formList.push({ name, age, phone });
      setFormList([...formList]);
      setName("");
      setAge("");
      setPhone("");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
      setFormList([...formList]);
    }
  };

  const handleDelete = (val) => {
    console.log("delete", val);
    let out = formList.filter((i) => i.phone !== val);
    setFormList(out);
  };
  return (
    <div className="container">
      <center>
        <h3>FORM CARD</h3>
      </center>
      <div className="card text-center p-2" style={{ width: "100%" }}>
        {error ? (
          <div class="alert alert-primary" role="alert">
            Please Enter All Fields
          </div>
        ) : null}
        <form>
          <div className="form-group mb-2 d-flex justify-content-evenly">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              className="form-name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mb-2  d-flex justify-content-evenly">
            <label htmlFor="age">AGE</label>
            <input
              type="number"
              maxLength={3}
              className="form-age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              id="age"
              placeholder="Enter age"
            />
          </div>
          <div className="form-group mb-2  d-flex justify-content-evenly">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              maxLength={10}
              value={phone}
              className="form-number"
              onChange={(e) => setPhone(e.target.value)}
              id="phoneNo"
              placeholder="enter Phone"
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </form>
      </div>
      {formList.length > 0 ? (
        formList.map((i, j) => (
          <div className="card mb-1" key={i.phone}>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="close"
                aria-label="Close"
                onClick={() => handleDelete(i.phone)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item"> NAME {i.name}</li>
              <li className="list-group-item">AGE {i.age}</li>
              <li className="list-group-item">Phone {i.phone}</li>
            </ul>
          </div>
        ))
      ) : (
        <center>
          <h5>No list found</h5>
        </center>
      )}
    </div>
  );
}

export default App;
