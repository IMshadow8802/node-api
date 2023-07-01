const asyncHandler = require("express-async-handler");
const Brand = require("../models/brandModel")

//@desc Get all brands
//@route GET /api/brand/fetchBrand
//@access public
const getBrands = asyncHandler(async (req, res) => {
  const brand = await Brand.find();
  res.status(200).json(brand);
});

//@desc Create New Brand
//@route POST /api/brand/createBrand
//@access public
const createBrand = asyncHandler(async (req, res) => {
  //console.log("The request body is",req.body);
  const { BrandName,Description } = req.body;
  if (!BrandName) {
    res.status(400);
    throw new Error("Please Enter BrandName");
  }

  const brand = await Brand.create({
    BrandName,Description
  });
  res.status(201).json(brand);
});

//@desc Update a Brand
//@route PUT /api/brand/updateBrand/:id
//@access public
const updateBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    res.status(404);
    throw new Error("Brand not found");
  }

  const updatedBrand = await Brand.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedBrand);
});

//@desc Delete a Brand
//@route DELETE /api/brand/deleteBrand/:id
//@access private
const deleteBrand = asyncHandler(async (req, res) => {

    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      res.status(404);
      throw new Error("Contact not found");
    }

    await Brand.deleteOne({ _id: req.params.id });
    res.status(200).json(brand);
});

module.exports = {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
};
