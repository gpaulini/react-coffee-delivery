import styled from 'styled-components'

export const CheckoutForm = styled.form`
  padding-block: 2.5rem;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 62rem) {
    flex-direction: column;
    align-items: center;
  }
`

export const CheckoutFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  
  &.deliver-input {
    min-width: 32rem;

    @media screen and (max-width: 62rem) {
      min-width: unset;
    }
  }

  &.order-review {
    flex: 1 1 auto;
  }

  h2 {
    font-family: ${props => props.theme.fontFamily.baloo}
  }
`

const InputGroup = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors['base-card']};
  border-radius: 6px;

  max-width: 40rem;
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

export const OrderReviewContainer = styled(InputGroup)`
  border-radius: 6px 44px 6px 44px;
`

export const OrderReviewList = styled.ul`
  max-height: 28rem;
  overflow: auto;
  padding-right: 2rem;
  margin-bottom: 1rem;

  li:last-child div {
    border-bottom: 0;
    margin-bottom: 0;
  }
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
