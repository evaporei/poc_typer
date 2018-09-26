import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Spin } from 'antd'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'

const getRandomNumber = () =>
  String(Math.random() * 100000000000000000)

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
    const { connected } = this.state

    return (
      <div className='App'>
        <Header/>
        <Spin tip='Connecting...' spinning={!connected} size='large'>
          <Switch>
            <Route
              path='/room/:room'
              render={props =>
                  <Switch>
                    <Route
                      path={`${props.match.path}/username/:name`}
                      render={() => <div>Game!</div>}
                    />
                    <Redirect to={`/room/${props.match.params.room}/username/guest_${getRandomNumber()}`}/>
                  </Switch>
              }
            />
            <Redirect to={`/room/training/username/guest_${getRandomNumber()}`}/>
          </Switch>
        </Spin>
      </div>
    )
  }
}

export default App
