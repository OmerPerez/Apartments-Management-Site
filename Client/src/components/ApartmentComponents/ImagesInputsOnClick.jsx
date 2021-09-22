import React from "react";

export default function ImagesInputsOnClick() {
  const [fields, setFields] = React.useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <>
      <div div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn-primary btn"
          onClick={() => handleAdd()}
        >
          הוסף תמונה
        </button>
      </div>

      {fields.map((field, idx) => {
        return (
          <>
            <div
              key={`${field}-${idx}`}
              className="d-flex justify-content-center mt-3"
            >
              <button
                type="button"
                style={{ marginRight: "2%" }}
                className="btn-danger"
                onClick={() => handleRemove(idx)}
              >
                הסר
              </button>
              <input
                id={idx}
                type="text"
                placeholder="הוסף תמונה"
                onChange={(e) => handleChange(idx, e)}
                style={{ textAlign: "center", width: "90%" }}
              />
            </div>
          </>
        );
      })}
    </>
  );
}
