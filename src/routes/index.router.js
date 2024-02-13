const Router = require("express");
const employeeRoutes = require("./employee.route");
const router = Router();

router.use("/employee", employeeRoutes);

module.exports = router;