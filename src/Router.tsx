import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './pages/layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
