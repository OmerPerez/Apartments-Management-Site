import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function ApartmentElectricBills() {
  const [electricBills, setElectricBills] = React.useState([]);

  React.useEffect(() => {
    const index = window.location.toString().lastIndexOf("/") + 1;
    const apartmentId = window.location.toString().substring(index);

    fetch("http://localhost:8081/electric/apartmentAllBills/" + apartmentId)
      .then((response) => response.json())
      .then((data) => setElectricBills(data));
  }, []);

  if (electricBills.length < 1) {
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
            <th scope="col">תעריף חשמל</th>
            <th scope="col">חודש שעבר</th>
            <th scope="col">חודש נוכחי</th>
            <th scope="col">סה״כ לתשלום</th>
            <th scope="col">שנה</th>
            <th scope="col">חודש</th>
          </tr>
        </thead>
        {electricBills.map((bill) => {
          return (
            <tbody>
              <tr className="mt-2">
                <th scope="row" style={{ fontWeight: "normal" }}>
                  {"₪" + bill.electricPrice}
                </th>
                <td>{bill.lastMonthClock}</td>
                <td>{bill.currentMonthClock}</td>
                <td>{"₪" + bill.electricTyariff.toString().substr(0, 7)}</td>
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
