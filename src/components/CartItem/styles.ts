import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors['base-button']};

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
`

export const CartItemMiddleInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  
  .name {
    flex-basis: 100%;
    color: ${props => props.theme.colors['base-subtitle']};
    ${props => props.theme.fontStyles['text-m']};
  }
`

export const RemoveButton = styled.button`
  padding: .5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors['base-button']};
  color: ${props => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  column-gap: .25rem;
  text-transform: uppercase;

  ${props => props.theme.fontStyles['button-m']}

  &:hover {
    background-color: ${props => props.theme.colors['base-hover']};
  }

  svg {
    color: ${props => props.theme.colors.purple}
  }
`

export const CartItemPrice = styled.strong`
  flex: 1 0 5rem;
  text-align: right;
  color: ${props => props.theme.colors['base-text']};
  ${props => props.theme.fontStyles['text-m']};
  font-weight: 700;
`
