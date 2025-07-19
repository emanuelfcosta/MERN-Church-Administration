const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

// const Member = require("../models/Member");
const Church = require("../models/Church");

router.get(`/`, async (req, res) => {
  // res.status(200).send("chegou em churches");

  const churchesList = await Church.find();

  if (!churchesList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(churchesList);
});

router.get("/:id", async (req, res) => {
  const church = await Church.findById(req.params.id);

  if (!church) {
    res
      .status(500)
      .json({ message: "The church with the given ID was not found." });
  }
  res.status(200).send(church);
});

router.post("/", async (req, res) => {
  let church = new Church({
    name: req.body.name,
    responsible: req.body.responsible,
    website: req.body.website,
    type: req.body.type,
    foundationdate: req.body.foundationdate,
    cnpj: req.body.cnpj,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    phone: req.body.phone,
  });
  church = await church.save();

  if (!church) return res.status(400).send("the church cannot be created!");

  res.send(church);
});

router.put("/:id", async (req, res) => {
  const church = await Church.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      responsible: req.body.responsible,
      website: req.body.website,
      type: req.body.type,
      foundationdate: req.body.foundationdate,
      cnpj: req.body.cnpj,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      phone: req.body.phone,
    },
    { new: true }
  );

  if (!church) return res.status(400).send("the church cannot be updated!");

  res.send(church);
});

router.delete("/:id", (req, res) => {
  Church.findByIdAndDelete(req.params.id)
    .then((church) => {
      if (church) {
        return res
          .status(200)
          .json({ success: true, message: "the church is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "church not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
