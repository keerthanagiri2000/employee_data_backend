const mongoose  = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    role: {
        type: String,
        required: false
    },
    team: {
        type: String,
        required: false
    },
    dateOfJoining: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }
}, { timestamps: true});

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;