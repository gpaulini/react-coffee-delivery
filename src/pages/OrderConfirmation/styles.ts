import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${props => props.theme.colors['yellow-dark']};
    ${props => props.theme.fontStyles['title-l']}
  }

  p {
    color: ${props => props.theme.colors['base-subtitle']};
    ${props => props.theme.fontStyles['text-l']}
  }

  @media screen and (max-width: 75rem) {
    justify-content: center;
    column-gap: 6rem;
    row-gap: 3rem;
  }
`

export const OrderDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  position: relative;
  background-color: ${props => props.theme.colors.background};
  border-radius: 6px 36px 6px 36px;
  max-width: 32rem;
  
  &::before {
    content: '';
    display: block;
    width: calc(100% + 4px);
    height: calc(100% + 4px);

    position: absolute;
    left: -2px;
    top: -2px;
    z-index: -1;

    border-radius: inherit;
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colors.yellow} 0%,
      ${props => props.theme.colors.purple} 100%
    );
  }
`

export const OrderDetailsListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: .75rem;

  .iconWrapper {
    flex: 0 0 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: white;
  }

  &.location .iconWrapper {
    background-color: ${props => props.theme.colors.purple}
  }

  &.time-to-deliver .iconWrapper {
    background-color: ${props => props.theme.colors.yellow}
  }

  &.payment .iconWrapper {
    background-color: ${props => props.theme.colors['yellow-dark']}
  }
`

export const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;

  b {
    ${props => props.theme.fontStyles['title-l']}
  }

  hr {
    flex: 1 0 auto;
  }

  p {
    ${props => props.theme.fontStyles['text-l']}
  }

  small {
    font-weight: bold;
  }
`
