import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalCss } from './styles'

import Rotas from './routes'

import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
