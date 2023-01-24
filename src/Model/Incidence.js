import mongoose from "mongoose";

const { Schema, model } = mongoose;

const IncidenceSchema = new Schema({
    incidence: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    facility: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    reportedBy: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dateOpened: {
        type: Date,
        required: true
    },    
    dateClosed: {
        type: Date
    },
    active: {
        type: String,
        required: true
    },
    lastUpdatedBy: {
        type: String,
        required: true
    },
    lastUpdatedDate: {
        type: Date
    },

}, {timestamps: true})