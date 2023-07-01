const express = require("express");
const router = express.Router();
const {getBrands,createBrand,updateBrand,deleteBrand} = require("../controllers/brandController")


router.route("/fetchBrand").get(getBrands);

router.route("/createBrand").post(createBrand)

router.route("/updateBrand/:id").put(updateBrand)

router.route("/deleteBrand/:id").delete(deleteBrand)

module.exports = router;