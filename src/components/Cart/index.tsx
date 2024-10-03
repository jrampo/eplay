import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  Overlay,
  CardContainer,
  Sidebar,
  Price,
  Quantity,
  CardItem
} from './styles'
import Tag from '../Tag'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CardItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Price>
          total de {formataPreco(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </Price>
        <Button title="Clique aqui para contnuar" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CardContainer>
  )
}

export default Cart
