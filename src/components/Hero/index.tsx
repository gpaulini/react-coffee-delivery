import { Coffee, Cube, ShoppingCartSimple, Timer } from 'phosphor-react'
import {
  HeroContainer,
  HeroContent,
  HeroFeaturesList,
  HeroFeaturesListItem,
} from './styles'
import heroImage from '../../assets/hero.png'
import type { defaultTheme } from '../../styles/themes/default'

type ListItemProps = {
  Icon: typeof Coffee,
  iconColor: keyof typeof defaultTheme.colors
  text: string
}

const ListItem = ({
  Icon,
  iconColor,
  text,
}: ListItemProps) => {
  return (
    <HeroFeaturesListItem $iconColor={iconColor}>
      <div className="iconWrapper">
        {Icon && <Icon size={16} weight="fill" />}
      </div>
      <span>{text}</span>
    </HeroFeaturesListItem>
  )
}

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora do dia
        </p>

        <HeroFeaturesList>
          <ListItem
            Icon={ShoppingCartSimple}
            iconColor="yellow-dark"
            text="Compra simples e segura"
          />
          <ListItem
            Icon={Cube}
            iconColor="base-text"
            text="Embalagem mantém o café intacto"
          />
          <ListItem
            Icon={Timer}
            iconColor="yellow"
            text="Entrega rápida e rastreada"
          />
          <ListItem
            Icon={Coffee}
            iconColor="purple"
            text="O café chega fresquinho até você"
          />
        </HeroFeaturesList>
      </HeroContent>

      <img src={heroImage} alt="" />
    </HeroContainer>
  )
}
