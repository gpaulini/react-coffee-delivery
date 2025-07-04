import styled from 'styled-components'

export const ProductsContainer = styled.main`
  margin-top: 2rem;

  h1 {
    text-align: left;
    margin-bottom: 3.5rem;
    ${props => props.theme.fontStyles['title-l']}

    @media screen and (max-width: 75rem) {
      text-align: center;
    }
  }
`

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media screen and (max-width: 75rem) {
    justify-content: center;
  }
`
