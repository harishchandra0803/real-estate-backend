import mongoose from "mongoose"; 

//const mongoose = require('mongoose')

//creating schema
const userSchema = new mongoose.Schema({
    username: {
        type: String, //username type is string 
        required: true,//no username can be added to db without username
        unique: true,//all username should be different otherwise error 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,//two users can have the same password therefore unique: true not used here
    },
    avatar : {
        type : String,
        default : "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
    },
    
},{timestamps:true}); //time of creation of user , time of updation of users stored 

const User = mongoose.model("User",userSchema); //schema created

export default User;