import { Hero } from '../../components/Hero'
import {
  ProductsContainer,
  ProductsList,
} from './styles'
import { data as productsData } from '../../static/products'
import { Product } from '../../components/Product'

export const Home = () => {
  return (
    <>
      <Hero />

      <ProductsContainer>
        <h1>Nossos Cafés</h1>

        <ProductsList>
          {
            productsData.length &&
            productsData.map(data => {
              return (
                <li key={btoa(data.variant)}>
                  <Product {...data} />
                </li>
              )
            })
          }
        </ProductsList>
      </ProductsContainer>
    </>
  )
}
