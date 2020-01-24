import React from 'react'

const Title = () => (
  <h1>Introduccion a Unit Testing</h1>
)

const App = () => {
  return (
    <section id="main">
      <Title />
      <div className="container">
        <span num={3} active={false}>Primero</span>
        <span num="3" active="false">Segundo</span>
      </div>
      <input type="text"/>
      <input type="checkbox"/>
      <p>Fuera</p>
      <div>
        <p>Adentro</p>
      </div>
    </section>
  )
}

export default App
