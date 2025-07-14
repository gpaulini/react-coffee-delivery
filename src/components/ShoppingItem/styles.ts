import styled from 'styled-components'

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
  }
`
export const ProductAddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 2.5rem;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  background-color: ${props => props.theme.colors['purple-dark']};

  svg {
    fill: ${props => props.theme.colors['base-card']}
  }
`
