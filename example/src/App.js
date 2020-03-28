import React, { Component } from 'react'
import './index.css'
import { ExampleComponent, Component2, Component3, Component4 } from 'library-3'

export default class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <ExampleComponent test='altTest' text='Modern React component module' />
        <Component2 text2="component2 button"/>
        <Component3/>
        <Component4 text4="dupa 4" />
      </div>  
    )
  }
}
