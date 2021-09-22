import React from "react";
import "./TenantStyle.css";
import TenantCard from "./TenantCard";

export default function TenantProfile() {
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    const index = window.location.toString().lastIndexOf("/") + 1;
    const apartmentId = window.location.toString().substring(index);

    fetch("http://localhost:8081/tenants/apartment/" + apartmentId)
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  if (tenants.length < 1) {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <h3 style={{ color: "black" }}>לא קיימים דיירים לדירה </h3>
        </div>
      </div>
    );
  }

  
  return (
    <div className="d-flex justify-content-center">
      {tenants.map((tenant) => {
        return (
          <div style={{ margin: "0 2% 2% 17%" }}>
            <TenantCard
              phone={tenant.phone}
              gender={tenant.gender}
              email={tenant.emailAddress}
              age={tenant.age}
              name={tenant.firstName + " " + tenant.lastName}
            />
          </div>
        );
      })}
    </div>
  );
}
