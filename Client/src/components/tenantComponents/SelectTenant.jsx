import React from "react";
import "./TenantStyle.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export default function SelectTenant() {
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/tenants")
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  if (tenants.length < 1) return "";

  const optionsArray = [];

  tenants.map((tenant) => {
    optionsArray.push({
      key: tenant._id,
      label: tenant.firstName + " " + tenant.lastName,
    });
  });

  return (
    <>
      <DropdownMultiselect
        placeholder="בחר דייר"
        selectDeselectLabel="בחר הכל"
        buttonClass="btn btn-outline-primary"
        options={optionsArray}
        name="בחר דייר"
        // {tenants.map((tenant) => {
        //   return (
        //     <option value={tenant._id}>
        //       {tenant.firstName + " " + tenant.lastName}
        //     </option>
        //   );
        // })}
      />
      {/* <label className="from-label select-label">בחר דיירים</label> */}
    </>
  );
}
