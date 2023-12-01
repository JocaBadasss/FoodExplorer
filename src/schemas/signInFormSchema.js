import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "O campo email não pode estar vazio" })
    .email({
      message: "O email informado não é válido",
    }),
  password: z
    .string()
    .nonempty({
      message: "O campo senha não pode estar vazio",
    })
    .min(8, {
      message: "A senha deve ter no mínimo 8 caracteres",
    }),
})
