const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema(
    {
        name: String,
        // images: // Image Schema,
        description: Number,
        location: String,
        // author : { type: Schema.Types.ObjectId, ref: "User"}
        type: {
            type: String,
            enum: ["Public", "School", "Special", "Research"] // Add 'library' on views
        },
        // head librarian ??
        operatingDays: {
            type: [String],
            enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        // openTime: 
    },
    {
        timestamps: true
    }
)