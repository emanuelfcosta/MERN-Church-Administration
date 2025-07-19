const express = require("express");
const router = express.Router();

const Study = require("../models/Study");

router.get(`/`, async (req, res) => {
  const studiesList = await Study.find();

  if (!studiesList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(studiesList);
});

router.get("/:id", async (req, res) => {
  const study = await Study.findById(req.params.id);

  if (!study) {
    res
      .status(500)
      .json({ message: "The study with the given ID was not found." });
  }
  res.status(200).send(study);
});

router.post("/", async (req, res) => {
  let study = new Study({
    theDate: req.body.theDate,
    subject: req.body.subject,
    description: req.body.description,
    notes: req.body.notes,
  });
  study = await study.save();

  if (!study) return res.status(400).send("the study cannot be created!");

  res.send(study);
});

router.put("/:id", async (req, res) => {
  const study = await Study.findByIdAndUpdate(
    req.params.id,
    {
      theDate: req.body.theDate,
      subject: req.body.subject,
      description: req.body.description,
      notes: req.body.notes,
    },
    { new: true }
  );

  if (!study) return res.status(400).send("the study cannot be updated!");

  res.send(study);
});

router.delete("/:id", (req, res) => {
  Study.findByIdAndDelete(req.params.id)
    .then((study) => {
      if (study) {
        return res
          .status(200)
          .json({ success: true, message: "the study is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "study not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
