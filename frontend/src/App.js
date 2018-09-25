import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'

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
        <Header/>
      </div>
    )
  }
}

export default App
