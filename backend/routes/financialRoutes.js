const express = require("express");
const router = express.Router();

const Financial = require("../models/Financial");

router.get(`/`, async (req, res) => {
  const financialList = await Financial.find();

  if (!financialList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(financialList);
});

router.get("/:id", async (req, res) => {
  const financial = await Financial.findById(req.params.id);

  if (!financial) {
    res
      .status(500)
      .json({ message: "The Financial with the given ID was not found." });
  }
  res.status(200).send(financial);
});

router.post("/", async (req, res) => {
  let financial = new Financial({
    type: req.body.type,
    description: req.body.description,
    amount: req.body.amount,
    theDate: req.body.theDate,
    paymentMethod: req.body.paymentMethod,
  });
  financial = await financial.save();

  if (!financial)
    return res.status(400).send("the financial cannot be created!");

  res.send(financial);
});

router.put("/:id", async (req, res) => {
  const financial = await Financial.findByIdAndUpdate(
    req.params.id,
    {
      type: req.body.type,
      description: req.body.description,
      amount: req.body.amount,
      theDate: req.body.theDate,
      paymentMethod: req.body.paymentMethod,
    },
    { new: true }
  );

  if (!financial)
    return res.status(400).send("the financial cannot be updated!");

  res.send(financial);
});

router.delete("/:id", (req, res) => {
  Financial.findByIdAndDelete(req.params.id)
    .then((financial) => {
      if (financial) {
        return res
          .status(200)
          .json({ success: true, message: "the financial is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "financial not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
