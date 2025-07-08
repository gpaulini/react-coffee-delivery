import { Hero } from '../../components/Hero'
import {
  ShoppingItemsContainer,
  ShoppingItemsList,
} from './styles'
import { data as productsData } from '../../static/products'
import { ShoppingItem } from '../../components/ShoppingItem'

export const Home = () => {
  return (
    <>
      <Hero />

      <ShoppingItemsContainer>
        <h1>Nossos Cafés</h1>

        <ShoppingItemsList>
          {
            productsData.length &&
            productsData.map(data => {
              return (
                <li key={btoa(data.variant)}>
                  <ShoppingItem {...data} />
                </li>
              )
            })
          }
        </ShoppingItemsList>
      </ShoppingItemsContainer>
    </>
  )
}
