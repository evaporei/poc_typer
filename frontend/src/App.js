import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    const endpoint = `${window.location.hostname}:8080`
    const socket = socketIOClient(endpoint)

    this.state = {
      socket,
      connected: false,
    }

    socket.on('connect', () => this.setState({ connected: true }))
    socket.on('disconnect', () => this.setState({ connected: false }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
