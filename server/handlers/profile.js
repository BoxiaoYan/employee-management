const db = require("../models");

exports.saveProfile = async function (req, res, next) {
  try {
    const { userID, profile } = req.body;
    const userProfile = await db.Profile.findOne({ user: userID });
    if (userProfile) {
      // If user exists, update the existing profile
      await db.Profile.updateOne({ user: userID }, profile);
      return res
        .status(200)
        .json({ message: "User profile updated successfully" });
    } else {
      // If user does not exist, create a new profile
      const newUserProfile = new db.Profile(profile);
      await newUserProfile.save();
      // Update application status
      const user = await db.User.findById(userID);
      user.appStatus = "Pending";
      await user.save();
      return res
        .status(201)
        .json({ message: "User profile saved successfully" });
    }
  } catch (error) {
    console.error(error);
    return next({ status: 500, message: "Server Error" });
  }
};

exports.getProfile = async function (req, res, next) {
  try {
    const { userID } = req.body;
    const userProfile = await db.Profile.findOne({ user: userID });
    if (userProfile) {
      return res.status(200).json({ profile: userProfile });
    } else {
      return res.status(404).json({ error: "User profile not found" });
    }
  } catch (error) {
    console.error(error);
    return next({ status: 500, message: "Server Error" });
  }
};
