import { mongoose } from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        options: {
            type: [String],
            default: [],
            required: false
        }
    },
    { timestamp: true }
);

export const Contact =
    mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);