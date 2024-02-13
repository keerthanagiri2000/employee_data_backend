const Employee = require("../models/employee.model.");

const addEmployee = async (req, res) => {
    try {
        const { employee_name, email, role, team, dateOfJoining, address} = req.body;
        const createEmployee = await Employee.create({
            employee_name,
            email,
            role,
            team,
            dateOfJoining,
            address
        });
        return res.status(201).send({ status: true, message: "Employee added successfully"})

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

};

const listAllEmployee = async (req, res) => {
    try {
        const employers = await Employee.find({}).lean();
        return res.status(200).send({ status: true, message:"Employers listed", data: employers });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};

const listEmployeeById = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const employeeById = await Employee.findOne({ _id: employeeId }).lean();
        if (!employeeById) {
            return res.status(404).send({ status: false, message: "Employee not found"});
        }
        return res.status(200).send({ status: true, message: "Employee details listed", data: employeeId });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};

const editEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const employeeById = await Employee.findOne({ _id: employeeId }).lean();
        if (!employeeById) {
            return res.status(404).send({ status: false, message: "Employee not found"});
        }
        const updateEmployee = await Employee.findOneAndUpdate(
            { _id: employeeById._id},
            { ...req.body},
            { new: true }
        );
        return res.status(200).send({ status: true, message: "Employee details updated sucessfully" });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};

const deleteEmployee = async(req, res) => {
    try {
        const { employeeId } = req.params;
        const employeeById = await Employee.findOne({ _id: employeeId }).lean();
        if (!employeeById) {
            return res.status(404).send({ status: false, message: "Employee not found"});
        }
        await Employee.findOneAndDelete({ _id: employeeId });
        return res.status(200).send({ status: true, message: "Employee deleted successfully"});

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};




module.exports = {
    addEmployee,
    listAllEmployee,
    listEmployeeById,
    editEmployee,
    deleteEmployee 
}