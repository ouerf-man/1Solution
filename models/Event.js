const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventSchema = new Schema({
    jour: {
        type:Number ,
        required:true
    },
    event: {
        type: String,
        required: true
    },
    par: {
        type: String,
    },
    dateStart: {
        type: String,
        required: true
    },
    dateEnd: {
        type: String,
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
    users:{
        type:Array,
        default:[]
    },
    montant:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("events", EventSchema);
