/*-- ========== Input Section ========== --*/
const User = require("../model/authModul");
const bcrypt = require("bcrypt");

/*-- ========== Sign Up Section ========== --*/
exports.signUp = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 11);
  const { name, username, password } = req.body;
  try {
    const singUser = new User({
      name,
      username,
      password,
    });
    try {
      await singUser.save();
      res.status(201).json({
        message: `Hello! ${name} your account has been created!`,
        singUser,
      });
    } catch (error) {
      res.status(400).json({
        message: "something was wrong",
        error,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Server Error",
      error,
    });
  }
};

/*-- ========== Login Section ========== --*/
exports.logIn = async (req, res) => {};
