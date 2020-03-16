const mongoose = require('mongoose');

const registrationSchema = mongoose.Schema(
    {
        mobileNo:{
            type:Number,
            required: true,
            unique: true,
            trim: true,
            minlength: 10   
        },
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        },
        confirmPassword:{
            type:String,
            required:true,
            trim:true
        },
        flatAddress:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true
    }
);

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration; 