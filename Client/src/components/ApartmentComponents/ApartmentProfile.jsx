import React from "react";
import ApartmentCard from "./ApartmentCard";
import ApartmentImagesCarousel from "./ApartmentImagesCarousel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import TenantProfile from "../tenantComponents/TenantProfile";
import "./CardStyle.css";
import DeleteApartment from "./DeleteApartment";
import TenantProfileDialog from "../tenantComponents/TenantProfileDialog";
import FacebookPostDialog from "./FacebookPostDialog";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import PersonIcon from "@material-ui/icons/Person";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ButtonsMenu from "./ButtonsMenu";

export default function ApartmentProfile() {
  const [apartment, setApartment] = React.useState(null);
  const [tenants, setTenants] = React.useState(null);

  React.useEffect(() => {
    async function fetchApartmentProfilAndTenantAPI() {
      const index = window.location.toString().lastIndexOf("/") + 1;
      const id = window.location.toString().substring(index);

      let response = await fetch(
        "http://localhost:8081/apartmentProfile/" + id
      );
      response = await response.json();
      setApartment(response);
    }
    fetchApartmentProfilAndTenantAPI();

    async function fetchCurrentTenantAPI() {
      const idx = window.location.toString().lastIndexOf("/") + 1;
      const apartmentId = window.location.toString().substring(idx);
      let res = await fetch(
        "http://localhost:8081/tenants/apartment/" + apartmentId
      );
      res = await res.json();
      setTenants(res);
    }
    fetchCurrentTenantAPI();
  }, []);

  if (apartment === null) return "";

  return (
    <div style={{ margin: "2%" }}>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-2%" }}
      >
        <div class="card text-center" style={{ width: "83.5%" }}>
          <div className="card-header" style={{ backgroundColor: "#FFEFD5" }}>
            <div className="row">
              <div className="col-1 d-flex" style={{ marginLeft: "-1%" }}>
                <ButtonsMenu agreement={apartment.agreement} />
              </div>
              <div className="col-11 d-flex justify-content-end">
                <h3
                  class="card-title"
                  style={{
                    marginTop: "0.7%",
                    textAlign: "right",
                    fontSize: "250%",
                  }}
                >
                  {apartment.housingUnitName}
                </h3>
                <DeleteApartment
                  id={apartment._id}
                  city={apartment.city}
                  address={apartment.address}
                  number={apartment.apartmentNumber}
                />
              </div>
            </div>
          </div>
          <div class="card-body">
            <div className="row mt-3 mb-4">
              <div className="col">
                <h5 class="card-title text-center">
                  <>סה״כ {apartment.apartmentArea} מ״ר</>
                  <AspectRatioIcon
                    color="primary"
                    fontSize="large"
                    style={{ marginLeft: "2%" }}
                  />
                </h5>
              </div>
              <div className="col">
                <h5 class="card-title text-center">
                  {apartment.numOfRooms == 1 ? (
                    <>דירת חדר</>
                  ) : (
                    <>
                      דירת {apartment.numOfRooms + " "}
                      חדרים
                    </>
                  )}
                  <HomeIcon
                    color="primary"
                    fontSize="large"
                    style={{ marginLeft: "1%" }}
                  />
                </h5>
              </div>
              <div className="col">
                <h5 class="card-title text-center">
                  {apartment.address} {apartment.apartmentNumber},{" "}
                  {apartment.city}
                  <LocationOnIcon
                    color="primary"
                    fontSize="large"
                    style={{ marginLeft: "1%" }}
                  />
                </h5>
              </div>
            </div>

            <div className="row">
              {tenants.length > 0 ? (
                <>
                  <div className="col">
                    <h5 class="card-title text-center">
                      סיום חוזה
                      {" " +
                        tenants[tenants.length - 1].dateOfEnd.split("T")[0]}
                      <EventBusyIcon
                        fontSize="large"
                        style={{
                          marginLeft: "1%",
                          color: "red",
                          marginRight: "4%",
                        }}
                      />
                    </h5>
                  </div>

                  <div className="col">
                    <h5 class="card-title text-center">
                      {tenants[tenants.length - 1].firstName +
                        " " +
                        tenants[tenants.length - 1].lastName}
                      <PersonIcon
                        color="primary"
                        fontSize="large"
                        style={{ marginLeft: "1%" }}
                      />
                    </h5>
                  </div>
                </>
              ) : (
                <>
                  <div className="col">
                    <h5 class="card-title text-center">
                      כניסה מיידית
                      <EventAvailableIcon
                        fontSize="large"
                        style={{
                          marginLeft: "1%",
                          color: "green",
                          marginRight: "4%",
                        }}
                      />
                    </h5>
                  </div>
                  <div className="col">
                    <h5 class="card-title text-center">
                      לא קיים דייר
                      <PersonIcon
                        color="primary"
                        fontSize="large"
                        style={{ marginLeft: "1%" }}
                      />
                    </h5>
                  </div>
                </>
              )}
              <div className="col">
                <div className="d-flex justify-content-center mb-4">
                  {apartment.apartmentStatus ? (
                    <>
                      <h5 style={{ color: "red" }}>הדירה תפוסה</h5>
                      <HighlightOffIcon
                        style={{
                          color: "red",
                          height: "9%",
                          width: "9%",
                          marginRight: "1%",
                          marginLeft: "1%",
                          marginTop: "-1%",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <h5 style={{ color: "green" }}>הדירה פנויה</h5>
                      <CheckCircleIcon
                        style={{
                          color: "green",
                          height: "9%",
                          width: "9%",
                          marginRight: "1%",
                          marginLeft: "1%",
                          marginTop: "-1%",
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center"></div>
          </div>
          <div
            class="card-footer text-muted"
            style={{ backgroundColor: "#FFEFD5" }}
          >
            <div class="card-body" style={{ fontSize: "120%", color: "black" }}>
              {apartment.description}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <ApartmentImagesCarousel images={apartment.images} />
      </div>
    </div>
  );
}
