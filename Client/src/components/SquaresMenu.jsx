import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function SquaresMenu() {
  const [apartments, setApartments] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => setApartments(data));
  }, []);

  if (apartments.length < 1) return "";
  
  return (
    <div style={{ paddingRight: "15%", paddingLeft: "15%" }}>
      <div className="row mb-5">
        <div className="col">
          <Link to="/tenants" style={{ textDecoration: "none" }}>
            <div class="circle-card">
              <div class="circle-card_image">
                <img src="https://icon-library.com/images/key-icon-png/key-icon-png-20.jpg" />
              </div>
              <div class="circle-card_title title-black">
                <p> הדיירים שלי </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <a
            href={apartments[apartments.length - 1].driveFoldersUrl}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div class="circle-card">
              <div class="circle-card_image">
                <img src="https://mannionmiddleschool.com/wp-content/uploads/2021/01/googleDriveLogo-1000x563.jpg" />
              </div>
              <div class="circle-card_title title-black">
                <p>{"שלי" + " " + "Drive" + "-ה"}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <Link to="/myApartments" style={{ textDecoration: "none" }}>
            <div class="circle-card">
              <div class="circle-card_image">
                <img src="https://www.habinteg.org.uk/media/images/versions/img94joktmu73079.jpg" />
              </div>
              <div class="circle-card_title title-black">
                <p> הדירות שלי </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4 offset-2">
          <Link to="/electricCalc" style={{ textDecoration: "none" }}>
            <div class="circle-card">
              <div class="circle-card_image">
                <img src="https://icon-library.com/images/battery-charger-icon/battery-charger-icon-22.jpg" />
              </div>
              <div class="circle-card_title title-black">
                <p> מחשבון חשמל </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/waterCalc" style={{ textDecoration: "none" }}>
            <div class="circle-card">
              <div class="circle-card_image">
                <img src="https://icon-library.com/images/water-icon-png/water-icon-png-3.jpg" />
              </div>
              <div class="circle-card_title title-black">
                <p> מחשבון מים </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
