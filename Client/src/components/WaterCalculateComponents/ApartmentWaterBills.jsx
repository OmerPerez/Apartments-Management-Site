import * as React from "react";

export default function ApartmentWaterBills() {
  const [waterBills, setWaterBills] = React.useState([]);

  React.useEffect(() => {
    const index = window.location.toString().lastIndexOf("/") + 1;
    const apartmentId = window.location.toString().substring(index);

    fetch("http://localhost:8081/water/apartmentWaterBills/" + apartmentId)
      .then((response) => response.json())
      .then((data) => setWaterBills(data));
  }, []);

  if (waterBills.length < 1) {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <h3 style={{ color: "black" }}>לא קיימים חשבונות במערכת </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center text-center">
      <table class="table border border-3 border-dark">
        <thead
          className="thead-dark"
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          <tr>
            <th scope="col">תעריף מים</th>
            <th scope="col">חודש שעבר</th>
            <th scope="col">חודש נוכחי</th>
            <th scope="col">סה״כ לתשלום</th>
            <th scope="col">שנה</th>
            <th scope="col">חודש</th>
          </tr>
        </thead>
        {waterBills.map((bill) => {
          return (
            <tbody>
              <tr className="mt-2">
                <th scope="row" style={{ fontWeight: "normal" }}>
                  {"₪" + bill.waterPrice}
                </th>
                <td>{bill.lastMonthClock}</td>
                <td>{bill.currentMonthClock}</td>
                <td>{"₪" + bill.waterTyariff.toString().substr(0, 7)}</td>
                <td>{bill.currentYear}</td>
                <td>{bill.currentMonth}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
