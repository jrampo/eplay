import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'resident evil 4, conhecido no japao como biohazard 4, é um jogo eletronico de survival...',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'rpg',
    description:
      'resident evil 4, conhecido no japao como biohazard 4, é um jogo eletronico de survival...',
    title: 'diablo 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'aventura',
    description:
      'resident evil 4, conhecido no japao como biohazard 4, é um jogo eletronico de survival...',
    title: 'zelda',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'exploração',
    description:
      'resident evil 4, conhecido no japao como biohazard 4, é um jogo eletronico de survival...',
    title: 'star wars',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'rpg',
    description: 'diablo4 é um jogo de rpg de ação em desenvolvimento',
    title: 'diablo 4',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'rpg',
    description: 'diablo4 é um jogo de rpg de ação em desenvolvimento',
    title: 'zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'rpg',
    description: 'diablo4 é um jogo de rpg de ação em desenvolvimento',
    title: 'star wars',
    system: 'windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'rpg',
    description: 'diablo4 é um jogo de rpg de ação em desenvolvimento',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['17/05'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
