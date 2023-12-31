import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Ordered } from './pages/Ordered'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordered" element={<Ordered />} />
      </Route>
    </Routes>
  )
}
