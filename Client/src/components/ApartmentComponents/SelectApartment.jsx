import React from "react";

export default function SelectApartment() {
  const [apartments, setApartments] = React.useState([]);
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => setApartments(data));

    fetch("http://localhost:8081/tenants")
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  if (apartments.length < 1 || tenants.length < 1) return "";

  return (
    <>
      <select class="form-select" style={{ textAlign: "center" }}>
        <option selected>בחר דירה</option>
        {apartments.map((apartment) => {
          return (
            <option value={apartment._id}>
              {apartment.housingUnitName +
                " ( " +
                tenants.find((tenant) => tenant.apartment === apartment._id)
                  .firstName +
                " " +
                tenants.find((tenant) => tenant.apartment === apartment._id)
                  .lastName + " )"}
            </option>
          );
        })}
      </select>
    </>
  );
}
