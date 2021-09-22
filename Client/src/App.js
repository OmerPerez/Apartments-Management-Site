import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePageApartments from "./components/ApartmentComponents/HomePageApatments";
import SideBar from "./components/SideBar";
import ApartmentProfile from "./components/ApartmentComponents/ApartmentProfile";
import CreateTenant from "./components/tenantComponents/CreateTenant";
import AllTenants from "./components/tenantComponents/AllTenants";
import CreateApartment from "./components/ApartmentComponents/CreateApartment";
import DeleteTenant from "./components/tenantComponents/DeleteTenant";
import ElectricCalculateForm from "./components/ElectiricCalculateComponents/ElectricCalculateForm";
import WaterCalculateForm from "./components/WaterCalculateComponents/WaterCalculeteForm";
import SquaresMenu from "./components/SquaresMenu";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route path="/waterCalc" component={WaterCalculateForm} />
        <Route path="/electricCalc" component={ElectricCalculateForm} />
        <Route path="/tenants/delete/:tenantId" component={DeleteTenant} />
        <Route path="/tenants/create" component={CreateTenant} />
        <Route path="/tenants" component={AllTenants} />
        <Route path="/apartment/create" component={CreateApartment} />
        <Route path="/Apartment/:id" component={ApartmentProfile} />
        <Route path="/myApartments" component={HomePageApartments} />
        <Route path="/" component={SquaresMenu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
