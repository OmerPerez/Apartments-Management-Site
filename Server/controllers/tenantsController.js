const tenantSchema = require("../models/tenant");
const apartmentSchema = require("../models/apartment");

// const tenants = [
//   {
//     fullName: "עומר פרץ",
//     age: 23,
//     phone: +972522520484,
//     gender: "male",
//     emailAddress: "omerperez222@gmail.com",
//     dateOfEntry: Date.now(),
//     numOfapartment: 1,
//   },
//   {
//     fullName: "עידו פרץ",
//     age: 22,
//     phone: +972523671766,
//     gender: "male",
//     emailAddress: "idoperez123@gmail.com",
//     dateOfEntry: Date.now(),
//     numOfapartment: 2,
//   },
//   {
//     fullName: "רוני פרץ",
//     age: 17,
//     phone: +972545546468,
//     gender: "female",
//     emailAddress: "ronitperez@gmail.com",
//     dateOfEntry: Date.now(),
//     numOfapartment: 3,
//   },
//   {
//     fullName: "ניר פרץ",
//     age: 22,
//     phone: +972545225337,
//     gender: "male",
//     emailAddress: "nirperez@gmail.com",
//     dateOfEntry: Date.now(),
//     numOfapartment: 4,
//   },
// ];
// tenants.map(async (tenant) => {
//   await new tenantSchema(tenant, { versionKey: false }).save();
// });

// const tenants = [
//   {
//     fullName: "עומר פרץ",
//     age: 21,
//   },
//   {
//     fullName: "עידו פרץ",
//     age: 21,
//   },
//   {
//     fullName: "ניר פרץ",
//     age: 21,
//   },
//   {
//     fullName: "רונית פרץ",
//     age: 21,
//   },
//   {
//     fullName: "מאיה פרץ",
//     age: 21,
//   },
// ];

const getAllTenants = (req, res) => {
  tenantSchema.find().then((results) => {
    res.json(results);
  });
};

const getTenantsByApartmentId = (req, res) => {
  console.log(req.params.apartmentId);
  tenantSchema.find({ apartment: req.params.apartmentId }).then((results) => {
    res.json(results);
  });
};

const getTenantById = (req, res) => {
  tenantSchema.findById(req.params.tenantId).then((tenant) => {
    res.json(tenant);
  });
};

const createNewTenant = async (req, res) => {
  const createTenant = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: parseInt(req.body.age),
    phone: parseInt(req.body.phone),
    gender: req.body.gender,
    emailAddress: req.body.emailAddress,
    dateOfEntry: req.body.dateOfEntry,
    dateOfEnd: req.body.dateOfEnd,
    apartment: req.body.apartment,
  };
  const newTenant = await tenantSchema.create(createTenant);

  await apartmentSchema.findOneAndUpdate(
    { id: newTenant.apartment },
    { $push: { tenants: newTenant._id } }
  );
  res.json(createTenant);
};

const deleteTenant = async (req, res) => {
  console.log(req.params.id);
  const _id = req.params.id;
  const tenant = await tenantSchema.deleteOne({ _id });
  // await apartmentSchema.updateMany(
  //   { _id: tenant.apartment },
  //   { $pull: { currentTenants: tenant._id, tenantsHisoty: tenant._id } }
  // );
  return res.json(tenant);
};

// const updateTenant = async (req, res) => {
//   let currentTenantId = req.params.id;
//   const currentTenant = tenantSchema.findById({ currentTenantId });

//   await apartmentSchema.updateMany(
//     { _id: currentTenant.apartment },
//     { $pull: { tenants: currentTenant._id } }
//   );

//   let updateCurrentTenant = await new magicianSchema({
//     _id: req.params.id,
//     fullName: req.body.magicianName,
//     age: parseInt(req.body.magicianAge),
//     magicianImage: req.body.magicianImage,
//     school: req.body.school,
//     regDateSchool: new Date().getDate(),
//     spells: req.body.spells,
//   });

//   await spellSchema.updateMany(
//     { _id: updateCurrentMagician.spells },
//     {
//       $push: {
//         magicians: updateCurrentMagician._id,
//       },
//     }
//   );

//   magicianSchema.update(
//     currentMagician,
//     updateCurrentMagician,
//     options,
//     callback
//   );
// };

module.exports = {
  getAllTenants,
  getTenantsByApartmentId,
  getTenantById,
  createNewTenant,
  deleteTenant,
};
