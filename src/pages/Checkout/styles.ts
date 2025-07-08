import styled from 'styled-components'

export const CheckoutForm = styled.form`
  padding-block: 2.5rem;
  display: flex;
  gap: 2rem;
`

export const CheckoutFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: ${props => props.theme.fontFamily.baloo}
  }
`

const InputGroup = styled.div`
  padding: 2.5rem;
  background-color: ${props => props.theme.colors['base-card']};
  border-radius: 6px;
`

export const InputGroupLabel = styled.div`
  display: flex;
  column-gap: .5rem;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: .25rem;
    font-weight: 400;
    ${props => props.theme.fontStyles['text-l']}
  }

  p {
    font-weight: 400;
    ${props => props.theme.fontStyles['text-m']}
  }
`

export const AddressInputGroup = styled(InputGroup)`
  ${InputGroupLabel} {
    svg {
      color: ${props => props.theme.colors['yellow-dark']}
    }
  }
`

export const PaymentInputGroup = styled(InputGroup)`
  ${InputGroupLabel} {
    svg {
      color: ${props => props.theme.colors.purple}
    }
  }
`

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: .75rem;
  row-gap: 1rem;

  :nth-child(1) {
    grid-column: 1 / 2;
  }

  :nth-child(2) {
    grid-column: 1 / -1;
  }

  :nth-child(4) {
    grid-column: 2 / -1;
  }
`

export const AddressInputContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: .75rem;
    right: .75rem;
    color: ${props => props.theme.colors['base-label']};
    font-style: italic;
    font-size: .75rem;
    display: none;
  }
`

export const AddressInput = styled.input`
  width: 100%;
  padding: .75rem;
  color: ${props => props.theme.colors['base-label']};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors['base-button']};

  &:focus {
    color: ${props => props.theme.colors['base-text']};
    border-color: ${props => props.theme.colors['yellow-dark']};
  }

  &:not(:focus):valid {
    color: ${props => props.theme.colors['base-text']};
    border-color: ${props => props.theme.colors['base-button']};
  }

  &:not(:focus):placeholder-shown {
    + span {
      display: inline;
    }
  }
`

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: .75rem;
`

export const PaymentOption = styled.button`
  display: flex;
  align-items: center;
  column-gap: .75rem;

  padding: 1rem;
  background-color: ${props => props.theme.colors['base-button']};
  border: 1px solid transparent;
  text-transform: uppercase;

  ${props => props.theme.fontStyles['button-m']};

  &:hover {
    background-color: ${props => props.theme.colors['base-hover']};
  }

  &.active {
    background-color: ${props => props.theme.colors['purple-light']};
    border-color: ${props => props.theme.colors.purple};
  }

  svg {
    color: ${props => props.theme.colors.purple};
  }
`

export const OrderReviewContainer = styled(InputGroup)`
  border-radius: 6px 44px 6px 44px;
`

export const OrderReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors['base-text']};

    ${props => props.theme.fontStyles['text-s']};

    &:last-of-type {
      ${props => props.theme.fontStyles['text-l']};
      font-weight: 700;
    }
  }
`

export const SubmitOrderButton = styled.button`
  width: 100%;
  padding: .75rem;
  color: white;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 6px;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.colors['yellow-dark']};
  }

  ${props => props.theme.fontStyles['button-g']};
`
