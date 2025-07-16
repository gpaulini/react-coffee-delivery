import styled, { keyframes } from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  padding: 1.25rem;
  text-align: center;

  border-radius: 6px 36px 6px 36px;
  background-color: ${props => props.theme.colors['base-card']};

  img {
    margin-top: -3rem;
    margin-bottom: 1rem;
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: .25rem;
    row-gap: .5rem;
  }

  .name {
    margin: 1rem 0 .5rem;
    font-family: ${props => props.theme.fontFamily.baloo};
    ${props => props.theme.fontStyles['title-s']}
  }
  
  .description {
    color: ${props => props.theme.colors['base-label']};
    ${props => props.theme.fontStyles['text-s']}
  }
`

export const ProductLabel = styled.span`
  text-transform: uppercase;
  border-radius: 12px;
  padding: .25rem .5rem;
  color: ${props => props.theme.colors['yellow-dark']};
  background-color: ${props => props.theme.colors['yellow-light']};
  ${props => props.theme.fontStyles.tag}
`

export const ProductForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  .totalPrice {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    column-gap: .25rem;

    ${props => props.theme.fontStyles['text-s']}

    strong {
      font-family: ${props => props.theme.fontFamily.baloo};
      ${props => props.theme.fontStyles['title-m']}
    }
  }

  .actions {
    display: flex;
    align-items: stretch;
    column-gap: .5rem;
    margin-left: auto;
  }
`
export const ProductAddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 2.5rem;
  position: relative;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  background-color: ${props => props.theme.colors['purple-dark']};

  svg {
    fill: ${props => props.theme.colors['base-card']}
  }
`

const floatUp = keyframes`
  0%,
  100% {
    top: 0;
    opacity: 0;
  }

  50% {
    opacity: 1;
    top: -60%;
  }

  70% {
    top: -90%;
    opacity: .25;
  }

  80% {
    opacity: 0;
  }
`

type TAnimatedAddedQuantityProps = {
  $quantity: number
}

export const AnimatedAddedQuantity = styled.span<TAnimatedAddedQuantityProps>`
  position: absolute;
  top: 0;
  animation: ${floatUp} .5s ease-out forwards;

  &::after {
    content: '+${props => props.$quantity}';
    color: ${props => props.theme.colors.purple};
    
    ${props => props.theme.fontStyles['text-m']};
    font-weight: bold;
  }
`
