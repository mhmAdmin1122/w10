import { model, Schema, models } from "mongoose";

const feedSchema = new Schema({
    feedBack: {type: String, required: true}
})

export const Feed = models.Feed || model('Feed', feedSchema);