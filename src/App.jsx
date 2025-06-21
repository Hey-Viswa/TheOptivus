import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>The Optivus</h1>
      </header>
      
      <main className="app-main">
        <div className="welcome-section">
          <h2>Welcome to The Optivus</h2>
          <p>Your optimized solution for the digital world.</p>
        </div>
        
        <div className="counter-section">
          <h3>Interactive Counter</h3>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} The Optivus. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
