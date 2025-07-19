const express = require("express");
const router = express.Router();

const Member = require("../models/Member");
const Church = require("../models/Church");

router.get(`/`, async (req, res) => {
  const memberList = await Member.find().populate("church");

  if (!memberList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(memberList);
});

router.get("/:id", async (req, res) => {
  const member = await Member.findById(req.params.id).populate("church");

  if (!member) {
    res
      .status(404)
      .json({ message: "The Member with the given ID was not found." });
  }
  res.status(200).send(member);
});

router.post("/", async (req, res) => {
  const church = await Church.findById(req.body.church);
  if (!church) return res.status(402).send("Invalid Church");

  let member = new Member({
    status: req.body.status,
    role: req.body.role,
    baptismdate: req.body.baptismdate,
    addmission: req.body.addmission,
    name: req.body.name,
    gender: req.body.gender,
    birthdate: req.body.birthdate,
    address: req.body.address,
    state: req.body.state,
    occupation: req.body.occupation,
    church: church,
  });
  member = await member.save();

  if (!member) return res.status(400).send("the member cannot be created!");

  res.send(member);
});

router.put("/:id", async (req, res) => {
  const church = await Church.findById(req.body.church);
  if (!church) return res.status(404).send("Invalid Church");

  const member = await Member.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
      role: req.body.role,
      baptismdate: req.body.baptismdate,
      addmission: req.body.addmission,
      name: req.body.name,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      address: req.body.address,
      state: req.body.state,
      occupation: req.body.occupation,
      church: church,
    },
    { new: true }
  );

  if (!member) return res.status(400).send("the member cannot be updated!");

  res.send(member);
});

router.delete("/:id", (req, res) => {
  Member.findByIdAndDelete(req.params.id)
    .then((member) => {
      if (member) {
        return res
          .status(200)
          .json({ success: true, message: "the member is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "member not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
