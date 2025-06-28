import './index.css'
import Footer from './partials/footer'
import Menu from './partials/menu'

const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h1>Fast React Pizza Co.</h1>
      </header>
      <Menu />
      <Footer />
    </div>
  )
}

export default App
