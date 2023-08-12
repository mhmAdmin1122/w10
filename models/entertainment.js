import { model, Schema, models } from "mongoose";

const entertainmentSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    pic: {type: String, required: true},
    video: {type: String, required: true}
})

export const Entertainment = models.Entertainment || model('Entertainment', entertainmentSchema);