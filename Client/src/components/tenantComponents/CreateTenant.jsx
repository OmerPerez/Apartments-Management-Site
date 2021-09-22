import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./TenantStyle.css";
import SelectApartment from "../ApartmentComponents/SelectApartment";

export default function CreateTenant() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [dateEntery, setDateEntery] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [apartment, setApartment] = useState();

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const api = axios.create({
    baseURL: "http://localhost:8081",
  });

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      phone: phoneNumber,
      gender: gender,
      emailAddress: email,
      dateOfEntry: dateEntery,
      dateOfEnd: dateEnd,
      apartment: apartment,
    };
    api
      .post("/tenants/create", data)
      .then(function (response) {
        console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const chooseApartmentId = (e) => {
    console.log(e.target.value);
    setApartment(e.target.value);
  };

  const selectGender = (e) => {
    setGender(e.target.value);
    console.log("gender", { gender });
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-center">
          <div class="container">
            <div class="row mb-4">
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  placeholder="גיל"
                  style={{ textAlign: "center" }}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  class="form-control"
                  id="lastName"
                  placeholder="שם משפחה"
                  style={{ textAlign: "center" }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  class="form-control"
                  id="firstName"
                  placeholder="שם פרטי"
                  style={{ textAlign: "center" }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div class="row mb-2">
              <div className="col" onChange={chooseApartmentId}>
                <SelectApartment />
              </div>
              <div className="col" onChange={selectGender}>
                <select class="form-select" style={{ textAlign: "center" }}>
                  <option selected>בחר מגדר </option>
                  <option value="זכר">זכר</option>
                  <option value="נקבה">נקבה</option>
                  <option value="לא ידוע">לא ידוע</option>
                </select>
              </div>
              <div class="col">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  class="form-control"
                  id="phoneNumber"
                  placeholder="מספר נייד"
                  style={{ textAlign: "center" }}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div class="row mb-4">
              <div className="col">
                <label style={{ fontSize: "150%" }}>תאריך סיום חוזה</label>
                <input
                  type="date"
                  class="form-control"
                  id="dateEntery"
                  style={{ textAlign: "center" }}
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </div>
              <div className="col">
                <label style={{ fontSize: "150%" }}>תאריך כניסה</label>
                <input
                  type="date"
                  class="form-control"
                  id="dateEntery"
                  style={{ textAlign: "center" }}
                  value={dateEntery}
                  onChange={(e) => setDateEntery(e.target.value)}
                />
              </div>
            </div>
            <div class="row mb-4">
              <div className="col">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="כתובת דוא״ל"
                  style={{ textAlign: "center", height: "130%" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <div className="d-flex justify-content-center">
          {/* <Link to={"/tenants"}> */}
          <button
            style={{ width: "30%" }}
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="btn-lg btn-primary mb-4 mt-4"
          >
            <div className="d-flex justify-content-center">
              {loading ? "Loading..." : "צור דייר חדש"}
            </div>
          </button>
          {/* </Link> */}
        </div>

        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
}
