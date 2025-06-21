import blueprint from 'asasvirtuais-blueprint/src'
import z from 'zod'

export const props = z.object({
  table: z.string(),
})

export type Props<readable = {}> = z.infer<typeof props>

export const result = z.object({
  data: z.array(z.object({})),
  total: z.number().int().gte(0).optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
  pages: z.number().int().positive().optional()
})

export type Result<readable = {}> = z.infer<typeof result>[]

export const type = z.function(z.tuple([props]), result)

export type Type = z.infer<typeof type>

export const listBP = blueprint<Props, Result>()

export default listBP
