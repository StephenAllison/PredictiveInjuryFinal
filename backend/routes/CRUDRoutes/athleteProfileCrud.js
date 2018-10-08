// routes/project-routes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const athleteProfile = require("../../models/athleteProfile");

// GET route => to Get Full Athlete Profile
router.get("/athleteProfile", (req, res, next) => {
  athleteProfile
    .find()
    // .populate("moderators")
    // .populate("mediators")
    .then(athleteFullProfile => {
      res.json(athleteFullProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new Athlete Profile
router.post("/createNewAthlete", (req, res, next) => {
  // if (req.user.role === "medstaff") {
  //   return res.redirect("/");
  // }

  athleteProfile
    .create({
      sport: req.body.sport,
      league: req.body.league,
      team: req.body.team,
      name: req.body.name,
      position: req.body.position,
      physicalMediatingFactorScore: req.body.physicalMediatingFactorScore,
      psychologicalMediatingFactorScore: req.body.psychologicalMediatingFactorScore,
      socialMediatingFactorScore: req.body.socialMediatingFactorScore,
      physicalModeratingFactorScore: req.body.physicalModeratingFactorScore,
      psychologicalModeratingFactorScore: req.body.psychologicalModeratingFactorScore,
      socialModeratingFactorScore: req.body.socialModeratingFactorScore,
      injuryRiskScore: req.body.injuryRiskScore,
      riskLevel: req.body.riskLevel,
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});
//GET route => Find Athlete By ID
router.get("/athlete/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  athleteProfile
    .findById(req.params.id)
    .then(response => {
      res.json(response);
      console.log(response);
    })
    .catch(err => {
      res.json(err);
      console.log(err);
    });
});
//PUT route => Update Athlete
router.put("/updateAthleteProfile/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  athleteProfile
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Profile ${req.params.id} has been updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});
//Delete route => Delete Athlete
router.delete("/deleteAthlete/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  athleteProfile
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Athlete with ${req.params.id} has been successfully removed.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;