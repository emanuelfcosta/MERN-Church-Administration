const express = require("express");
const router = express.Router();

const Prayer = require("../models/Prayer");

router.get(`/`, async (req, res) => {
  const prayersList = await Prayer.find();

  if (!prayersList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(prayersList);
});

router.get("/:id", async (req, res) => {
  const prayer = await Prayer.findById(req.params.id);

  if (!prayer) {
    res
      .status(500)
      .json({ message: "The Prayer with the given ID was not found." });
  }
  res.status(200).send(prayer);
});

router.post("/", async (req, res) => {
  let prayer = new Prayer({
    reason: req.body.reason,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
  });
  prayer = await prayer.save();

  if (!prayer) return res.status(400).send("the prayer cannot be created!");

  res.send(prayer);
});

router.put("/:id", async (req, res) => {
  const prayer = await Prayer.findByIdAndUpdate(
    req.params.id,
    {
      reason: req.body.reason,
      description: req.body.description,
      priority: req.body.priority,
      status: req.body.status,
    },
    { new: true }
  );

  if (!prayer) return res.status(400).send("the Prayer cannot be updated!");

  res.send(prayer);
});

router.delete("/:id", (req, res) => {
  Prayer.findByIdAndDelete(req.params.id)
    .then((prayer) => {
      if (prayer) {
        return res
          .status(200)
          .json({ success: true, message: "the prayer is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "prayer not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
