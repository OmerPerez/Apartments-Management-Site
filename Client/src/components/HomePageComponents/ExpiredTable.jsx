// const [apartment, setApartment] = React.useState(null);
// const [tenants, setTenants] = React.useState(null);

// React.useEffect(() => {
//   async function fetchApartmentProfilAndTenantAPI() {
//     const index = window.location.toString().lastIndexOf("/") + 1;
//     const id = window.location.toString().substring(index);

//     let response = await fetch("http://localhost:8081/apartmentProfile/" + id);
//     response = await response.json();
//     setApartment(response);
//   }
//   fetchApartmentProfilAndTenantAPI();

//   async function fetchCurrentTenantAPI() {
//     const idx = window.location.toString().lastIndexOf("/") + 1;
//     const apartmentId = window.location.toString().substring(idx);
//     let res = await fetch(
//       "http://localhost:8081/tenants/apartment/" + apartmentId
//     );
//     res = await res.json();
//     setTenants(res);
//   }
//   fetchCurrentTenantAPI();
// }, []);
