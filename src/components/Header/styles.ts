import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: .25rem;
  padding: .5rem;

  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};

  svg {
    color: ${props => props.theme['purple']};
  }
`

type CartProps = {
  addedItems?: number
}

export const CartButton = styled.button<CartProps>`
  padding: 0.5rem;
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  position: relative;

  &::before {
    content: '${props => props.addedItems}';
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);


    background-color: ${props => props.theme['yellow-dark']};
    color: white;
    border-radius: 50%;

    ${props => props.theme.fontStyles['text-s']}
  }
`
