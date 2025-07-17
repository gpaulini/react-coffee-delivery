import styled, { css } from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: .75rem;
  row-gap: 1rem;

  > :first-child {
    grid-column: 1 / 4;
  }

  > :nth-child(2) {
    grid-column: 1 / -1;
  }

  > :nth-child(3) {
    grid-column: 1 / 3;
  }

  > :nth-child(4) {
    grid-column: 3 / -1;
  }

  > :nth-child(5) {
    grid-column: 1 / 4;
  }

  > :nth-child(6) {
    grid-column: 4 / 8;
  }

  @media screen and (max-width: 48rem) {
    display: flex;
    flex-wrap: wrap;

    > div {
      flex: 0 0 100%;
    }

    > :first-child,
    > :nth-child(3) {
      max-width: 10rem;
    }

    > :nth-child(4) {
      flex: 1 0 15rem;
    }

    > :nth-child(6) {
      flex: 1 0 auto;
    }

    > :nth-child(7) {
      max-width: 4rem;
    }
  } 

  @media screen and (max-width: 36rem) {
    > :first-child {
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`

export const ZipcodeSearchingLabel = styled.span`
  display: inline-block;
  min-height: 2rem;
  position: absolute;
  left: calc(100% + 1rem);
  bottom: 0;
  width: 25rem;
  color: ${props => props.theme.colors.yellow};


  @media screen and (max-width: 36rem) {
    left: 0;
    top: 100%;
  }
`

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: .5rem;
  ${props => props.theme.fontStyles['text-xs']}

  input {
    height: 1rem;
  }
  
  label {
    line-height: 1rem
  }
`

export const OptionalInputTag = styled.span`
  position: absolute;
  bottom: .75rem;
  right: .75rem;
  color: ${props => props.theme.colors['base-label']};
  font-style: italic;
  font-size: .75rem;
  display: none;
`

export const AddressInputContainer = styled.div`
  position: relative;
`

const FormFieldStyles = css`
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
    + ${OptionalInputTag} {
      display: inline-block;
    }
  }
`

export const AddressInput = styled.input`${FormFieldStyles}`

export const AddressSelect = styled.select`
  ${FormFieldStyles}
  width: auto;
`
