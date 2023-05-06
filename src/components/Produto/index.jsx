import { adicionarAoCarrinho } from '../../store/cart/cart.reducer'
import { selectCart } from '../../store/cart/cart.selector'

import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'

export const paraReal = (valor) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ game }) => {
  const { categoria, imagem, titulo, plataformas, precoAntigo, preco } = game
  const dispatch = useDispatch()

  const cart = useSelector(selectCart)

  const handleCart = () => dispatch(adicionarAoCarrinho(game, cart))

  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{categoria}</S.Tag>
        <img src={imagem} alt={titulo} />
      </S.Capa>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Plataformas>
        {plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {precoAntigo && <small>{paraReal(precoAntigo)}</small>}
        <strong>{paraReal(preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleCart} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
