import { Hero } from '../../components/Hero'
import {
  ShoppingItemsContainer,
  ShoppingItemsList,
} from './styles'
import { data as productsData } from '../../@static/products'
import { ShoppingItem } from '../../components/ShoppingItem'
import { useContext, useEffect } from 'react'
import { ShoppingContext } from '../../contexts/ShopppingContext'

export const Home = () => {
  const { shoppingState, shoppingDispatch } = useContext(ShoppingContext)

  useEffect(() => {
    if (shoppingState.isOrderFinished) {
      shoppingDispatch({
        type: 'FINISH_ORDER',
      })

      shoppingDispatch({
        type: 'SET_IS_ORDER_FINISHED',
        payload: {
          isOrderFinished: false,
        },
      })
    }
  }, [shoppingState, shoppingDispatch])

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
                  <ShoppingItem item={{ ...data }} />
                </li>
              )
            })
          }
        </ShoppingItemsList>
      </ShoppingItemsContainer>
    </>
  )
}
