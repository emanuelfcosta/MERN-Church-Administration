const express = require("express");
const router = express.Router();

const Occasion = require("../models/Occasion");

router.get(`/`, async (req, res) => {
  const occasionsList = await Occasion.find();

  if (!occasionsList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(occasionsList);
});

router.get("/:id", async (req, res) => {
  const occasion = await Occasion.findById(req.params.id);

  if (!occasion) {
    res
      .status(500)
      .json({ message: "The Occasion with the given ID was not found." });
  }
  res.status(200).send(occasion);
});

router.post("/", async (req, res) => {
  let occasion = new Occasion({
    name: req.body.name,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
  });
  occasion = await occasion.save();

  if (!occasion) return res.status(400).send("the occasion cannot be created!");

  res.send(occasion);
});

router.put("/:id", async (req, res) => {
  const occasion = await Occasion.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      start: req.body.start,
      end: req.body.end,
    },
    { new: true }
  );

  if (!occasion) return res.status(400).send("the occasion cannot be updated!");

  res.send(occasion);
});

router.delete("/:id", (req, res) => {
  Occasion.findByIdAndDelete(req.params.id)
    .then((occasion) => {
      if (occasion) {
        return res
          .status(200)
          .json({ success: true, message: "the occasion is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "occasion not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
