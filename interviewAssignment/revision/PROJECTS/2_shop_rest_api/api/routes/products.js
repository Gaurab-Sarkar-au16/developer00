const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth")
const ProductsController = require('../controllers/products')

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const Product = require("../models/product");

router.get("/", ProductsController.productsGetAll);

router.post("/", checkAuth, upload.single("productImage"), ProductsController.productsCreate);

router.get("/:productId", ProductsController.productsGetSingle);

router.patch("/:productId", checkAuth, ProductsController.productsUpdate);

router.delete("/:productId", checkAuth, ProductsController.productsDelete);

module.exports = router;
