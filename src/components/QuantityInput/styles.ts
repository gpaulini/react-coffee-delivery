import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  svg {
    height: 100%;
    cursor: pointer;
    color: ${props => props.theme.colors.purple};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:first-of-type {
      left: .5rem;
    }

    &:last-of-type {
      right: .5rem;
    }
  }
`

export const StyledInput = styled.input`
  width: 4.5rem;
  padding: .5rem;
  border-radius: 6px;
  text-align: center;
  user-select: none;
  color: ${props => props.theme.colors['base-title']};
  background-color: ${props => props.theme.colors['base-button']};
  ${props => props.theme.fontStyles['text-m']}
`
