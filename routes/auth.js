/*-- ========== Input Section ========== --*/
const authRoute = require("express").Router();
const { signUp, logIn } = require("../controlar/authControlar");
/*-- ========== Routes Section ========== --*/

authRoute.post("/api/user/signup", signUp);
authRoute.post("/api/user/login", logIn);

module.exports = authRoute;
