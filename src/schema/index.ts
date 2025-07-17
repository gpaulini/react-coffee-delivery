import z from 'zod'
import type { TPayment } from '../@types/shopping-item'

export const UFs = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
] as const

export type UF = typeof UFs[number]

export const checkoutFormValidationSchema = z.object({
  zipcode: z.string()
    .regex(/^[0-9]{8}$/, 'CEP precisa ter 8 dígitos')
    .trim().optional(),
  street: z.string().min(1, 'Informe a Rua').trim(),
  number: z.string().min(1, 'Informe o Número').regex(/^[0-9]{1,7}$/).trim(),
  extra: z.string().trim().optional(),
  district: z.string().min(1, 'Informe o Bairro').trim(),
  city: z.string().min(1, 'Informe a Cidade').trim(),
  state: z.enum(UFs, 'Selecione uma UF válida'),
  payment: z.enum(
    ['credit', 'debit', 'cash'] as TPayment[],
    'Escolha um método de pagamento',
  ),
})

export type TCheckoutFormSchema = z.infer<typeof checkoutFormValidationSchema>
