"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a First Name'
    },
    lastName: {
        type: String,
        required: 'Enter A last Name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
