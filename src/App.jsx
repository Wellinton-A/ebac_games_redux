import { useEffect } from 'react'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './store/product/product.reducer'
import { selectProducts } from './store/product/product.selector'

function App() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  console.log(products)

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => res.json())
      .then((res) => dispatch(setProducts(res)))
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
