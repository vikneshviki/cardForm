import React, { useState } from "react";

const CardList = (Props) => {
  const [formList, setFormList] = useState(Props.value.formList)
  const handleDelete = (val) => {
    console.log("delete", val);
    let out = formList.filter((i) => i.phone !== val);
    setFormList(out);
  };
  return (
    <div className="card mb-1" key={Props.value.phone}>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          class="close"
          aria-label="Close"
          onClick={() => handleDelete(Props.value.phone)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item"> NAME {Props.value.name}</li>
        <li className="list-group-item">AGE {Props.value.age}</li>
        <li className="list-group-item">Phone {Props.value.phone}</li>
      </ul>
    </div>
  );
};
export default CardList;
