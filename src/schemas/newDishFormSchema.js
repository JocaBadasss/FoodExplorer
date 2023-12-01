import { z } from "zod"

export const dishFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  description: z
    .string()
    .min(3, { message: "A Descrição deve ter pelo menos 3 caracteres" }),
  price_cents: z
    .string()
    .min(3, { message: "O preço deve ter pelo menos 3 números" })
    .nonempty({ message: "O preço não pode estar vazio" }),
  tags: z
    .array(
      z
        .string()
        .min(3, { message: "A tag deve ter pelo menos 3 caracteres" })
        .max(20, { message: "A tag deve ter no máximo 20 caracteres" })
        .refine((tag) => tag.trim().length > 0, {
          message: "A tag não pode estar vazia",
        })
    )
    .nonempty({ message: "O campo de tags não pode estar vazio" }),
  category: z.string(),
  image: z
    .object({
      name: z.string(),
      lastModified: z.number(),
      lastModifiedDate: z.instanceof(Date),
      size: z.number().refine((value) => value > 0, {
        message: "Você deve selecionar uma imagem",
      }),
      type: z.string().refine((value) => value.startsWith("image/"), {
        message: "O tipo de arquivo deve ser uma imagem",
      }),
      webkitRelativePath: z.string(),
    })
    .refine(
      (file) => {
        if (!file || file.size <= 0) {
          throw new Error("Você deve selecionar uma imagem")
        }
        return file.size > 0 && file.type.startsWith("image/")
      },
      {
        message: "O arquivo deve ser uma imagem válida",
      }
    ),
})
