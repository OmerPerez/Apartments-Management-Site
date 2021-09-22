const apartment = require("../models/apartment");
const apartmentSchema = require("../models/apartment");
const tenantSchema = require("../models/tenant");

const getAllApartment = (req, res) => {
  apartmentSchema.find().then((results) => {
    res.json(results);
  });
};

const getApartmentById = (req, res) => {
  apartmentSchema.findById(req.params.apartmentId).then((apartment) => {
    res.json(apartment);
  });
};

const agreementHasExpired = async (req, res) => {
  const currentTenants = [];
  const tenantsAgreementExpired = [];
  await apartmentSchema.find().then((apartments) => {
    apartments.map((apartment) => {
      if (apartment.tenants.length > 0) {
        currentTenants.push(apartment.tenants[apartment.tenants.length - 1]);
      } else {
        console.log(apartment);
      }
    });
  });

  console.log(currentTenants.length);
  res.json(currentTenants);
};

// const getApartmentByNumber = (req, res) => {
//   apartmentSchema
//     .findOne({ apartmentNumber: req.params.apartmentNumber })
//     .then((apartment) => {
//       res.json(apartment);
//     });
// };

const creatApartment = async (req, res) => {
  const createApartment = {
    ownerFirstName: req.body.ownerFirstName,
    ownerLastName: req.body.ownerLastName,
    ownerEmail: req.body.ownerEmail,
    ownerPhone: req.body.ownerPhone,
    driveFoldersUrl: req.body.driveFoldersUrl,
    housingUnitName: req.body.housingUnitName,
    address: req.body.address,
    city: req.body.city,
    apartmentNumber: parseInt(req.body.apartmentNumber),
    apartmentArea: parseInt(req.body.apartmentArea),
    postalCode: parseInt(req.body.postalCode),
    numOfRooms: parseInt(req.body.numOfRooms),
    description: req.body.description,
    apartmentStatus: req.body.apartmentStatus,
    agreement: req.body.agreement,
    images: req.body.images,
    tenants: req.body.tenants,
  };
  const newApartmen = await apartmentSchema.create(createApartment);

  await tenantSchema.updateMany(
    { _id: newApartmen.tenants },
    {
      apartment: newApartmen._id,
    }
  );
  res.json(createApartment);
};

const newTenantUpdateApartment = async (name, numOfApartment) => {
  const currentApartment = apartmentSchema.findOne({
    apartmentNumber: parseInt(numOfApartment),
  });

  let updateApartment = await currentApartment;
  updateApartment.status(true);
  if (updateApartment.currentTenants.length > 0) {
    await tenantsHistory((tenantsHistory) => [
      ...tenantsHistory,
      currentTenants,
    ]);
  }
  updateApartment.currentTenants = [name];
  apartmentSchema.update(currentApartment, updateApartment, options, callback);
};

const addImagesToApartment = async (req, res) => {
  let currentApartmentId = req.params.id;
  const currentApartment = await apartmentSchema.findById({
    currentApartmentId,
  });
  let apartmentAddImages = await currentApartment;
  apartmentAddImages.images.push(req.body.images);

  apartmentSchema.update(
    currentApartment,
    apartmentAddImages,
    options,
    callback
  );
};

const deleteApartment = async (req, res) => {
  console.log(req.params.id);
  const _id = req.params.id;
  const apartment = await apartmentSchema.deleteOne({ _id });
  await tenantSchema.updateMany(
    { _id: apartment.tenants },
    { $pull: { apartment: apartment._id } }
  );
  return res.json(apartment);
};

// const updateApartment = async (req, res) => {
//   let currentApartmentId = req.params.id;
//   const currentMApartment = apartmentSchem.findById({ currentApartmentId });

//   await tenantSchema.updateMany(
//     { _id: currentApartment.tenants },
//     { $pull: { apartment: currentApartment._id } }
//   );

//   let updateCurrentApartment = await new apartmentSchema({
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
  getAllApartment,
  getApartmentById,
  agreementHasExpired,
  creatApartment,
  addImagesToApartment,
  newTenantUpdateApartment,
  deleteApartment,
};
