import React from "react";
import "./TenantStyle.css";
import TenantCard from "./TenantCard";

export default function AllTenants() {
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/tenants")
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  if (tenants.length < 1) return "";

  return (
    <>
      <div
        className="row"
        style={{
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        {tenants.map((tenant) => {
          return (
            <div className="col">
              <TenantCard
                phone={tenant.phone}
                gender={tenant.gender}
                email={tenant.emailAddress}
                age={tenant.age}
                name={tenant.firstName + " " + tenant.lastName}
                id={tenant._id}
                apartmentId = {tenant.apartment}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
