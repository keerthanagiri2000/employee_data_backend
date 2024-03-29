const Router = require("express");
const { addEmployee, listAllEmployee, editEmployee, deleteEmployee, listEmployeeById } = require("../controllers/employee.controllers");

const router = Router();

router.post('/add', addEmployee);
router.get('/list_all', listAllEmployee);
router.get('/list/:employeeId', listEmployeeById);
router.put('/edit/:employeeId', editEmployee);
router.delete('/delete/:employeeId', deleteEmployee)

module.exports = router;