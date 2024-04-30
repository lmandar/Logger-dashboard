const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    status: {
        type: Number,
        default:1
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
}, {
    timestamps: true
})


const Register = mongoose.model('register', schema);
module.exports = Register;
