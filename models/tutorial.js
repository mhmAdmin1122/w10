import { model, Schema, models } from "mongoose";

const tutorSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    pic: {type: String, required: true},
    video: {type: String, required: true}
})

export const Tutorial = models.Tutorial || model('Tutorial', tutorSchema);