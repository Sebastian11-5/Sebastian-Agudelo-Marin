
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function SpecialButton({ text }) {
  return <button>{text}</button>
}

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap'
    }}>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_677226-MCO117256094604_102026-O.webp"
          alt="African Twin"
          width="250"
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <h3>African Twin</h3>
        <SpecialButton text="Comprar" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGP0qwiBnMe2gd4pR8gU1ChwWTClitMTlLGhyNxgnUiU6Koip28JZRgj0&s=10"
          alt="MayBach"
          width="250"
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <h3>MayBach</h3>
        <SpecialButton text="Comprar" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFohXWUYpo3xsaq073XrZ10mfGjIxqzHAPrmfRe87FHRkK5I16r3T7ET4&s=10"
          alt="Yate crucero"
          width="250"
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <h3>Yate crucero</h3>
        <SpecialButton text="Comprar" />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
