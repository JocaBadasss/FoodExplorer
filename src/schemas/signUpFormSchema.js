import { z } from "zod"

export const signUpSchema = z.object({
  name: z.string().nonempty({ message: "O campo nome não pode estar vazio" }),
  email: z
    .string()
    .nonempty({ message: "O campo email não pode estar vazio" })
    .email({ message: "O email informado não é válido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
})
