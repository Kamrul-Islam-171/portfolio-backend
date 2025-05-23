import { model, Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>({
    skill: {
        type: String,
        required: true
    },
    skillIcon: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Skill = model<TSkill>('Skill', skillSchema)