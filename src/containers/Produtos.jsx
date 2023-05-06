import { useSelector } from 'react-redux'

import Produto from '../components/Produto'
import { selectProducts } from '../store/product/product.selector'

import * as S from './styles'

const Produtos = () => {
  const products = useSelector(selectProducts)

  return (
    <>
      <S.Produtos>
        {products.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
