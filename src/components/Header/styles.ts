import styled, { keyframes } from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors['base-card']};
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
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

  background-color: ${props => props.theme.colors['purple-light']};
  color: ${props => props.theme.colors['purple-dark']};

  svg {
    color: ${props => props.theme.colors['purple']};
  }
`

const shaking = keyframes`
  0%,
  100% {
    transform: translateY(0) rotate(0);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateY(-30px) rotate(6deg);
  }
  30% {
    transform: translateY(15px) rotate(-6deg);
  }
  45% {
    transform: translateY(-15px) rotate(3.6deg);
  }
  60% {
    transform: translateY(9px) rotate(-2.4deg);
  }
  75% {
    transform: translateY(-6px) rotate(1.2deg);
  }
`

type CartProps = {
  $addedItems?: number
}

export const CartButton = styled.button<CartProps>`
  padding: 0.5rem;
  background-color: ${props => props.theme.colors['yellow-light']};
  color: ${props => props.theme.colors['yellow-dark']};
  position: relative;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  &.shaking {
    animation: ${shaking} 1s linear ;
  }

  &::before {
    content: '${props => props.$addedItems}';
    
    display: ${props => props.$addedItems ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);


    background-color: ${props => props.theme.colors['yellow-dark']};
    color: white;
    border-radius: 50%;

    ${props => props.theme.fontStyles['text-s']}
  }
`
