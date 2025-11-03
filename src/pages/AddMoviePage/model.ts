import z from "zod";

export const FormDataSchema = z.object({
  title: z.string().min(5, "Минимум 5 символов"),
  plot: z.string().min(10, "Минимум 10 символов"),
  posterUrl: z.string().min(3),
});

export type FormData = z.infer<typeof FormDataSchema>;
