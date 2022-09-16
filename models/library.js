const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema(
    {
        name: String,
        // images: // Image Schema,
        description: String,
        location: String,
        // author : { type: Schema.Types.ObjectId, ref: "User"}
        type: {
            type: String,
            enum: ["Public", "School", "Special", "Research"]
        },
        librarianAndStaff: String, // Head Librarian?
        operatingDays: {
            type: [String],
            enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        openTime: String,
        closeTime: String,
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Library", LibrarySchema)