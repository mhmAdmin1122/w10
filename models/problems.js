import { model, Schema, models } from "mongoose";

const problemsSchema = new Schema({
    problems: {type: String, required: true}
})

export const Problems = models.Problems || model('Problems', problemsSchema);