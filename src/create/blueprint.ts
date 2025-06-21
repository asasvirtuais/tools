import blueprint from 'asasvirtuais-blueprint/src'
import z from 'zod'

export const props = z.object({ table: z.string(), data: z.object({}) })

export type Props = z.infer<typeof props>

export const result = z.object({})

export type Result = z.infer<typeof result>

export const type = z.function(z.tuple([props]), result)

export type Type = z.infer<typeof type>

export const createBP = blueprint<Props, Result>()

export default createBP