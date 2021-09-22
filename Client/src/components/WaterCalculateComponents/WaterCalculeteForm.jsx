import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectApartment from "../ApartmentComponents/SelectApartment";
import SelectMonth from "../ElectiricCalculateComponents/SelectMonth";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

export default function WaterCalculateForm() {
  /*Owner State Part */
  var mydate = new Date();
  var month = [
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
  ][mydate.getMonth()];

  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(
    parseInt(mydate.getFullYear())
  );
  const [currentMonthClock, setCurrentMonthClock] = useState();
  const [lastMonthClock, setLastMonthClock] = useState();
  const [waterPrice, setWaterPrice] = useState();
  const [apartmentId, setApartmentId] = useState();
  const [buttonCalc, setButtonCalc] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [tenants, setTenants] = useState();

  React.useEffect(() => {
    fetch("http://localhost:8081/tenants")
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  const api = axios.create({
    baseURL: "http://localhost:8081",
  });

  const sendWhatsappToTenant = () => {
    var total = ((currentMonthClock - lastMonthClock) * waterPrice).toString();
    var whatsappMassege =
      "היי" +
      " " +
      tenants.find((tenant) => tenant.apartment === apartmentId).firstName +
      "," +
      "%0a" +
      "החשבון מים לחודש" +
      " " +
      currentMonth +
      " " +
      "יצא" +
      " " +
      total.substring(0, total.indexOf(".")) +
      " " +
      "ש״ח" +
      "." +
      "%0a" +
      "בבקשה תעדכני אותי שקיבלת את ההודעה ושאין פערים" +
      ".";

    window.open(
      "https://wa.me/+972" +
        tenants.find((tenant) => tenant.apartment === apartmentId).phone +
        "?text=" +
        whatsappMassege
    );
    handleSubmit();
  };

  const handleCancelCalc = () => {
    window.location.reload();
  };

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      currentMonth: currentMonth,
      currentYear: currentYear,
      currentMonthClock: currentMonthClock,
      lastMonthClock: lastMonthClock,
      waterPrice: waterPrice,
      waterTyariff: (currentMonthClock - lastMonthClock) * waterPrice,
      apartment: apartmentId,
    };

    api
      .post("/water/create", data)
      .then(function (response) {
        console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.replace("http://localhost:3000/apartment/" + apartmentId);
  };

  return (
    <>
      <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <h3 className="mb-3" style={{ textAlign: "right", marginRight: "2%" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-calculator"
            viewBox="0 0 16 16"
            style={{ color: "#4169E1" }}
          >
            <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
            <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
          </svg>{" "}
          מחשבון מים
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
                  הכנס נתוני מים
                </h5>
              </div>
              <div className="card-body">
                <div class="row mb-4" style={{ marginTop: "-10px" }}>
                  <div className="col-2">
                    <label style={{ textAlign: "right" }}>שנת החישוב</label>
                    <input
                      type="number"
                      class="form-control"
                      id="currentYear"
                      placeholder={currentYear}
                      style={{ textAlign: "center" }}
                      value={currentYear}
                      onChange={(e) => setCurrentYear(e.target.value)}
                    />
                  </div>
                  <div
                    className="col-2"
                    onChange={(e) => setCurrentMonth(e.target.value)}
                  >
                    <label style={{ textAlign: "right" }}>חודש החישוב</label>
                    <SelectMonth currentMonth={currentMonth} />
                  </div>
                  <div class="col-8" style={{ marginTop: "40px" }}>
                    <div
                      onChange={(e) => setApartmentId(e.target.value)}
                    >
                      <SelectApartment />
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      id="waterPrice"
                      placeholder="הכנס תעריף מים"
                      style={{ textAlign: "center" }}
                      value={waterPrice}
                      onChange={(e) => setWaterPrice(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      id="currentMonthClock"
                      placeholder="מונה מים החודש"
                      style={{ textAlign: "center" }}
                      value={currentMonthClock}
                      onChange={(e) => setCurrentMonthClock(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      id="lastMonthClock"
                      placeholder="מונה מים חודש קודם"
                      style={{ textAlign: "center" }}
                      value={lastMonthClock}
                      onChange={(e) => setLastMonthClock(e.target.value)}
                    />
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

        {buttonCalc ? (
          <div className="d-flex justify-content-center row">
            <div className="col offset-2">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="btn-lg btn-primary mb-4 mt-4"
              >
                <div className="d-flex justify-content-center">
                  {loading ? (
                    "Loading..."
                  ) : (
                    <div>
                      <SaveAltIcon /> שמור היסטוריה
                    </div>
                  )}
                </div>
              </button>
            </div>
            <div className="col">
              <button
                className="btn-lg btn-success mb-4 mt-4"
                onClick={sendWhatsappToTenant}
              >
                <WhatsAppIcon /> {" " + "שתף לדייר"}
              </button>
            </div>
            <div className="col">
              <button
                className="btn-lg btn-primary mb-4 mt-4"
                onClick={handleCancelCalc}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-calculator"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                >
                  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                </svg>
                {" " + "חישוב חוזר"}
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              onClick={() => setButtonCalc(true)}
              className="btn-lg btn-primary mb-4 mt-4"
              style={{ width: "30%" }}
            >
              חשב חשבון
            </button>
          </div>
        )}

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
