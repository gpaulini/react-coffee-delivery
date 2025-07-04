import styled from 'styled-components'
import type { defaultTheme } from '../../styles/themes/default'

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 6rem;
  column-gap: 3.5rem;
  position: relative;

  img {
    aspect-ratio: 1.32;
  }

  @media screen and (max-width: 75rem) {
    justify-content: center;

    img {
      position: absolute;
      right: 0;
      opacity: 0.2;
      z-index: -1;
    }
  }

  @media screen and (max-width: 36rem) {
    padding-block: 2rem;

    img {
      display: none;
    }
  }
`

export const HeroContent = styled.article`
  max-width: 36rem;

  h1 {
    margin-bottom: 1rem;
    ${props => props.theme.fontStyles['title-xl']}
  }
  
  p {
    ${props => props.theme.fontStyles['text-l']}
  }

  @media screen and (max-width: 75rem) {
    max-width: 39rem;

    h1, p {
      text-align: center;
    }
  }

  @media screen and (max-width: 36rem) {
    h1 {
      ${props => props.theme.fontStyles['title-l']}
    }
  }
`

export const HeroFeaturesList = styled.ul`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  @media screen and (max-width: 48rem) {
    justify-content: center;
    margin-top: 2rem;
  }

  @media screen and (max-width: 36rem) {
    row-gap: .5rem;
  }
`

type HeroFeaturesListItemProps = {
  $iconColor: keyof typeof defaultTheme.colors
}

export const HeroFeaturesListItem = styled.li<HeroFeaturesListItemProps>`
  display: flex;
  align-items: center;
  column-gap: .75rem;
  min-width: 15rem;
  width: max-content;

  .iconWrapper {
    flex: 0 0 auto;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors[props.$iconColor]};

    svg {
      fill: ${props => props.theme.colors.background}
    }
  }

  span {
    ${props => props.theme.fontStyles['text-m']}
    font-weight: bold;
  }

  @media screen and (max-width: 75rem) {
    span {
      padding: .25rem .5rem;
      border-radius: 6px;
      background-color: ${props => props.theme.colors.background};
    }
  }

  @media screen and (max-width: 36rem) {
    span {
      padding: 0;
    }
  }
`
