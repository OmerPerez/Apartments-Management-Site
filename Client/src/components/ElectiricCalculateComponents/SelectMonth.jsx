import React from "react";

export default function SelectMonth({ currentMonth }) {
  const month = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ].filter((e) => e !== currentMonth);

  return (
    <>
      <select class="form-select" style={{ textAlign: "center" }}>
        <option selected>{currentMonth}</option>
        {month.map((m) => {
          return <option value={m}>{m}</option>;
        })}
      </select>
    </>
  );
}
