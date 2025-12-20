const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required!"],
        trim: true,
        minlength: [3, "Username must be at least 3 characters"]
    },
    age: {
        type: Number,
        required: [true, "Age required!"],
        min: [18, "Age must be >= 18"],
        max: [65, "Age must be <= 65"]
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
