import React, {
  useRef,
  useState,
  type ChangeEventHandler,
  type FocusEventHandler,
} from 'react'
import {
  AddressFormContainer,
  AddressInput,
  AddressInputContainer,
  CheckBoxWrapper,
  OptionalInputTag,
  ZipcodeSearchingLabel,
} from './style'
import { useFormContext } from 'react-hook-form'
import type { TCheckoutFormSchema } from '../../schema'

export const AddressForm = () => {
  const [isSearchingZipCode, setIsSearchingZipCode] = useState(false)
  const [isZipCodeIncomplete, setIsZipCodeIncomplete] = useState(false)
  const [isZipCodeInvalid, setIsZipCodeInvalid] = useState(false)
  const [isZipCodeFound, setIsZipCodeFound] = useState(false)

  const { register, setValue, setFocus } = useFormContext<TCheckoutFormSchema>()

  const handleZipCodeKeyUp: React.KeyboardEventHandler<HTMLInputElement> =
    async (e) => {
      if ((/^([0-9]|Backspace)$/.test(e.key)) === false) return
      if (isZipCodeIncomplete) setIsZipCodeIncomplete(false)

      const zipcode = e.currentTarget.value

      if (zipcode.length < 8) {
        if (isZipCodeFound) setIsZipCodeFound(false)
        return
      }

      setIsSearchingZipCode(true)
      const response = await fetch(
        'https://viacep.com.br/ws/' + zipcode + '/json/',
      )
      const fullAddress = await response.json()
      setIsSearchingZipCode(false)
      setIsZipCodeFound(true)

      if (fullAddress.erro) {
        setIsZipCodeInvalid(true)
        return
      }

      setValue('street', fullAddress.logradouro)
      setValue('district', fullAddress.bairro)
      setValue('city', fullAddress.localidade)
      setValue('state', fullAddress.uf)
      setFocus('number')
    }

  const handleZipCodeKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    (e) => {
      const zipcode = (e.currentTarget as HTMLInputElement).value
      if (zipcode.length > 8) e.preventDefault()
    }

  const handleZipCodeKeyBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const zipcode = e.currentTarget.value
    if (zipcode.length < 8) setIsZipCodeIncomplete(true)
  }

  const handleUnknownZipcode: ChangeEventHandler<HTMLInputElement> =
    (e) => {
      const isChecked = e.currentTarget.checked
      if (zipcodeRef.current) {
        zipcodeRef.current.style.display = isChecked ? 'none' : ''
        setFocus(isChecked ? 'street' : 'zipcode')
        setValue('zipcode', '')

        if (isZipCodeIncomplete) setIsZipCodeIncomplete(false)
        if (isSearchingZipCode) setIsSearchingZipCode(false)
        if (isZipCodeInvalid) setIsZipCodeInvalid(false)
      }
    }

  const unknownZipcodeRef = useRef<HTMLInputElement>(null)
  const zipcodeRef = useRef<HTMLInputElement>(null)

  return (
    <AddressFormContainer>
      <AddressInputContainer>
        {
          isZipCodeFound === false &&
            <CheckBoxWrapper>
              <input
                type="checkbox"
                name="unknown-zipcode"
                id="unknown-zipcode"
                ref={unknownZipcodeRef}
                onChange={handleUnknownZipcode}
              />
              <label htmlFor="unknown-zipcode">Não sei meu CEP</label>
            </CheckBoxWrapper>
        }
        <AddressInput
          type="number"
          placeholder="CEP"
          {...register('zipcode')}
          ref={zipcodeRef}
          onKeyUp={handleZipCodeKeyUp}
          onKeyDown={handleZipCodeKeyDown}
          onBlur={handleZipCodeKeyBlur}
          onChange={() => {
            if (isZipCodeInvalid) setIsZipCodeInvalid(false)
          }}
        />

        {
          isSearchingZipCode &&
            <ZipcodeSearchingLabel>
              ⏳ Buscando endereço...
            </ZipcodeSearchingLabel>
        }

        {
          isZipCodeIncomplete &&
            <ZipcodeSearchingLabel>
              ⚠️ Informe o CEP para buscar endereço
            </ZipcodeSearchingLabel>
        }

        {
          isZipCodeInvalid &&
            <ZipcodeSearchingLabel>
              ⚠️ CEP desconhecido
            </ZipcodeSearchingLabel>
        }
      </AddressInputContainer>

      <AddressInputContainer>
        <AddressInput
          type="text"
          placeholder="Rua"
          {...register('street')}
        />
      </AddressInputContainer>

      <AddressInputContainer>
        <AddressInput
          type="text"
          placeholder="Número"
          {...register('number')}
        />
      </AddressInputContainer>

      <AddressInputContainer>
        <AddressInput
          type="text"
          placeholder="Complemento"
          {...register('extra')}
        />
        <OptionalInputTag>
          Opcional
        </OptionalInputTag>
      </AddressInputContainer>

      <AddressInputContainer>
        <AddressInput
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
      </AddressInputContainer>

      <AddressInputContainer>
        <AddressInput
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
      </AddressInputContainer>

      <AddressInputContainer>
        <AddressInput
          type="text"
          placeholder="UF"
          {...register('state')}
        />
      </AddressInputContainer>
    </AddressFormContainer>
  )
}
