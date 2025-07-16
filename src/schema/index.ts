import z from 'zod'
import type { TPayment } from '../@types/shopping-item'

export const checkoutFormValidationSchema = z.object({
  zipcode: z.string()
    .regex(/^[0-9]{8}$/, 'CEP precisa ter 8 dígitos').trim().optional(),
  street: z.string().min(1, 'Informe a Rua').trim(),
  number: z.string().min(1, 'Informe o Número').regex(/^[0-9]{1,7}$/).trim(),
  extra: z.string().trim().optional(),
  district: z.string().min(1, 'Informe o Bairro').trim(),
  city: z.string().min(1, 'Informe a Cidade').trim(),
  state: z.string().regex(/^[A-Za-z]{2}$/).toUpperCase().trim(),
  payment: z.enum(
    ['credit', 'debit', 'cash'] as TPayment[],
    'Inform a payment method',
  ),
})

export type TCheckoutFormSchema = z.infer<typeof checkoutFormValidationSchema>
