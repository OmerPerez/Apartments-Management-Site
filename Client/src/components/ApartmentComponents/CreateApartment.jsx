import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TenantFormDialog from "../tenantComponents/TenantFormDialog";
import AddImagesDialog from "./AddImagesDialog";
import SelectTenant from "../tenantComponents/SelectTenant";
import ImagesInputsOnClick from "./ImagesInputsOnClick";

export default function CreateApartment() {
  /*Owner State Part */
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState();
  const [driveFoldersUrl, setDriveFolderUrl] = useState("");

  /*Apartment State Part */
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState();
  const [apartmentArea, setApartmentArea] = useState();
  const [postalCode, setPostalCode] = useState();
  const [housingUnitName, setHousingUnitName] = useState("");
  const [numOfRooms, setNumOfRooms] = useState();
  const [description, setDiscription] = useState("");
  const [apartmentStatus, setApartmentStatus] = useState(false);
  const [agreement, setAgreement] = useState("");
  const [images, setImages] = useState([]);
  const [tenants, setTenants] = useState([]);

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
      ownerFirstName: ownerFirstName,
      ownerLastName: ownerLastName,
      ownerEmail: ownerEmail,
      ownerPhone: parseInt(ownerPhone),
      driveFoldersUrl: driveFoldersUrl,
      address: address,
      city: city,
      apartmentNumber: parseInt(apartmentNumber),
      apartmentArea: parseInt(apartmentArea),
      housingUnitName: housingUnitName,
      postalCode: parseInt(postalCode),
      numOfRooms: parseInt(numOfRooms),
      description: description,
      apartmentStatus: apartmentStatus,
      agreement: agreement,
      images: images,
      tenants: tenants,
    };

    api
      .post("/create", data)
      .then(function (response) {
        console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const selectStatus = (e) => {
    if (e.target.value === "true") {
      setApartmentStatus(true);
    } else {
      setApartmentStatus(false);
    }
  };

  const apartmentImages = (e) => {
    if (document.getElementById(e.target.id) !== null) {
      if (images[e.target.id]) {
        images[e.target.id] = e.target.value;
      } else {
        setImages((images) => [...images, e.target.value]);
      }
    } else {
      setImages(
        images.filter(
          (item) =>
            new String(item).valueOf() !== new String(e.target.value).valueOf()
        )
      );
    }
  };

  const apartmentTenants = (e) => {
    if (document.getElementById(e.target.id).checked) {
      setTenants((tenants) => [...tenants, e.target.value]);
    } else {
      setTenants(
        tenants.filter(
          (item) =>
            new String(item).valueOf() !== new String(e.target.value).valueOf()
        )
      );
    }
  };

  return (
    <>
      <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <h3 className="mb-3" style={{ textAlign: "right", marginRight: "2%" }}>
          יצירת דירה חדשה
        </h3>
        <div className="d-flex justify-content-center">
          <div class="container">
            <div className="card mb-4  border-primary">
              <div class="card-header ">
                <h5
                  style={{
                    textAlign: "right",
                    marginRight: "2%",
                    marginTop: "1%",
                  }}
                >
                  מיועד לבעל/ת הדירה
                </h5>
              </div>
              <div className="card-body mt-3">
                <div class="row mb-4">
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      id="ownerPhone"
                      placeholder="מספר נייד"
                      style={{ textAlign: "center" }}
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      id="ownerName"
                      placeholder="שם משפחה"
                      style={{ textAlign: "center" }}
                      value={ownerLastName}
                      onChange={(e) => setOwnerLastName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      id="ownerName"
                      placeholder="שם פרטי"
                      style={{ textAlign: "center" }}
                      value={ownerFirstName}
                      onChange={(e) => setOwnerFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-6">
                    <input
                      class="form-control"
                      id="ownerEmail"
                      placeholder="@ דוא״ל"
                      style={{ textAlign: "center" }}
                      value={ownerEmail}
                      onChange={(e) => setOwnerEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-6">
                    <input
                      class="form-control"
                      id="ownerEmail"
                      placeholder="קישור לתקיית הדרייב שלך"
                      style={{ textAlign: "center" }}
                      value={driveFoldersUrl}
                      onChange={(e) => setDriveFolderUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-2  border-success ">
              <div class="card-header mt-1 ">
                <h5 style={{ textAlign: "right", marginRight: "2%" }}>
                  פרטי הדירה
                </h5>
              </div>
              <div className="card-body mt-3">
                <div class="row mb-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      id="housingUnitName"
                      placeholder="שם ליחידת הדיור"
                      style={{ textAlign: "center" }}
                      value={housingUnitName}
                      onChange={(e) => setHousingUnitName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      id="apartmentNumber"
                      placeholder="מספר דירה"
                      style={{ textAlign: "center" }}
                      value={apartmentNumber}
                      onChange={(e) => setApartmentNumber(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      id="address"
                      placeholder="רחוב"
                      style={{ textAlign: "center" }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      id="city"
                      placeholder="עיר"
                      style={{ textAlign: "center" }}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div className="col" onChange={selectStatus}>
                    <select class="form-select" style={{ textAlign: "center" }}>
                      <option selected>סטטוס הדירה </option>
                      <option value="true"> מושכרת</option>
                      <option value="false"> פנויה להשכרה</option>
                    </select>
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      id="apartmentArea"
                      placeholder="שטח הדירה (מ״ר)"
                      style={{ textAlign: "center" }}
                      value={apartmentArea}
                      onChange={(e) => setApartmentArea(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      id="postalCode"
                      placeholder="מיקוד"
                      style={{ textAlign: "center" }}
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      id="numOfRooms"
                      placeholder="מספר חדרים"
                      style={{ textAlign: "center" }}
                      value={numOfRooms}
                      onChange={(e) => setNumOfRooms(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-6">
                    <textarea
                      style={{ textAlign: "right" }}
                      class="form-control"
                      id="description"
                      rows="3"
                      placeholder="הוסף תיאור לדירה"
                      onChange={(e) => setDiscription(e.target.value)}
                    ></textarea>
                  </div>
                  <div class="col-6">
                    <input
                      style={{ textAlign: "center" }}
                      type="text"
                      class="form-control"
                      id="agreement"
                      placeholder="הוסף מסמך / חוזה"
                      value={agreement}
                      onChange={(e) => setAgreement(e.target.value)}
                    />

                    <div class="row">
                      <div
                        className="col-4"
                        style={{ marginTop: "2.5%", textAlign: "center" }}
                        onChange={apartmentTenants}
                      >
                        <SelectTenant />
                      </div>
                      <div className="col-4" style={{ marginTop: "2.5%" }}>
                        <TenantFormDialog />
                      </div>
                      <div
                        className="col-4"
                        style={{ marginTop: "2.5%" }}
                        onChange={apartmentImages}
                      >
                        <AddImagesDialog />
                      </div>
                    </div>
                  </div>
                </div>
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
          <Link to={"/"}>
            <button
              style={{ width: "120%" }}
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="btn-lg btn-primary mb-4 mt-4"
            >
              <div className="d-flex justify-content-center">
                {loading ? "Loading..." : "צור דירה חדשה"}
              </div>
            </button>
          </Link>
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
