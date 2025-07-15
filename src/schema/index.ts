import z from 'zod'
import type { TPayment } from '../@types/shopping-item'

export const checkoutFormValidationSchema = z.object({
  zipcode: z.string().regex(/^[0-9]{8}$/).optional(),
  street: z.string().min(1, 'Street cannot be empty').trim(),
  number: z.string().regex(/^[0-9]{1,7}$/),
  extra: z.string().trim().optional(),
  district: z.string().min(1, 'District cannot be empty').trim(),
  city: z.string().min(1, 'City cannot be empty').trim(),
  state: z.string().regex(/^[A-Za-z]{2}$/).toUpperCase(),
  payment: z.enum(
    ['credit', 'debit', 'cash'] as TPayment[],
    'Inform a payment method',
  ),
})

export type TCheckoutFormSchema = z.infer<typeof checkoutFormValidationSchema>
