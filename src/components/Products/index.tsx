import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/225x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae quaerat
      asperiores earum neque ducimus rem harum ullam minus excepturi a mollitia
      hic, repellendus deserunt vitae ipsum rerum dicta sit.
    </Descricao>
  </Card>
)

export default Product
