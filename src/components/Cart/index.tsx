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

const Cart = () => (
  <CardContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CardItem>
          <img src={starWars} />
          <div>
            <h3>nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CardItem>
        <CardItem>
          <img src={starWars} />
          <div>
            <h3>nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CardItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Price>
        total de R$ 250,00 <span>Em até 6x sem juros</span>
      </Price>
      <Button title="Clique aqui para contnuar" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CardContainer>
)

export default Cart
