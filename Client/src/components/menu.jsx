import React from "react";
import { Link } from "react-router-dom";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreateIcon from "@material-ui/icons/Create";
import HomeIcon from "@material-ui/icons/Home";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import OpacityIcon from "@material-ui/icons/Opacity";
export default function Menu() {
  const [apartments, setApartments] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => setApartments(data));
  }, []);

  if (apartments.length < 1) return "";

  return (
    <>
      <div style={{ textAlign: "center", fontFamily: "Apple Chancery" }}>
        <div style={{ marginTop: "5%" }}>
          <HomeIcon
            fontSize="large"
            color="primary"
            style={{ marginRight: "3%", marginBottom: "3%" }}
          />
          <Link
            to="/"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            עמוד הבית
          </Link>
        </div>
        <div style={{ marginTop: "7%" }}>
          <HomeIcon
            fontSize="large"
            color="primary"
            style={{ marginRight: "3%", marginBottom: "3%" }}
          />
          <Link
            to="/myApartments"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            הדירות שלי
          </Link>
        </div>
        <div style={{ marginTop: "7%" }}>
          <PeopleAltIcon
            fontSize="large"
            color="primary"
            style={{ marginRight: "3%", marginBottom: "3%" }}
          />
          <Link
            to="/tenants"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            הדיירים שלי
          </Link>
        </div>
        <div style={{ marginTop: "7%" }}>
          <AddCircleIcon
            fontSize="large"
            style={{ marginRight: "3%", marginBottom: "3%", color: "green" }}
          />
          <Link
            to="/apartment/create"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            הוספת דירה
          </Link>
        </div>
        <div style={{ marginTop: "7%" }}>
          <AddCircleIcon
            fontSize="large"
            style={{ marginRight: "3%", marginBottom: "3%", color: "green" }}
          />
          <Link
            to="/tenants/create"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            הוספת דייר
          </Link>
        </div>
        <div style={{ marginTop: "7%" }}>
          <CreateIcon
            color="primary"
            fontSize="large"
            style={{ marginRight: "3%", marginBottom: "3%" }}
          />
          <a
            href={apartments[apartments.length - 1].driveFoldersUrl}
            target="_blank"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            עדכון מסמכים
          </a>
        </div>
        <div style={{ marginTop: "7%" }}>
          <CreditCardIcon
            color="primary"
            fontSize="large"
            style={{ marginRight: "3%", marginBottom: "3%" }}
          />
          <Link
            to="/electricCalc"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            מחשבון חשמל
          </Link>
        </div>

        <div style={{ marginTop: "7%" }}>
          <OpacityIcon
            color="primary"
            fontSize="large"
            style={{ marginRight: "3%", marginBottom: "3%" }}
          />
          <Link
            to="/waterCalc"
            style={{
              fontSize: "170%",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
            }}
          >
            מחשבון מים
          </Link>
        </div>
      </div>
    </>
  );
}
