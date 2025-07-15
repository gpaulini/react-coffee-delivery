import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
`

export const PaymentOption = styled.button`
  display: flex;
  align-items: center;
  column-gap: .75rem;

  position: relative;
  overflow: hidden;

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
