import { z } from "zod";

const skillValidation = z.object({
    body: z.object({
        skill:z.string({required_error: "skill is required"}),
        skillIcon:z.string({required_error: "skillIcon is required"}),
        
    })
})

export const skillValidationSchema = {
    skillValidation
}