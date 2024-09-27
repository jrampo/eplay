import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          facere magnam vero animi libero sint ducimus placeat! Et, delectus,
          hic, commodi quo tempora ut amet placeat mollitia temporibus ex
          magnam.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PS5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Game <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          facere magnam vero animi libero sint ducimus placeat! Et, delectus,
          hic, commodi quo tempora ut amet placeat mollitia temporibus ex
          magnam.
        </p>
      </Section>
      <Gallery defaultCover={residentEvil} />
    </>
  )
}

export default Product
