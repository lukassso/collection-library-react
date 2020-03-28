import styles from './styles.css'

import React from 'react'
import PropTypes from 'prop-types'

import { Component4 } from './web/buttons'
// import Input from './web/inputs'

ExampleComponent.propTypes = {
  text: PropTypes.string,
  test: PropTypes.string
}

function ExampleComponent(props) {
  return (
    <React.Fragment>
      // eslint-disable-next-line react/prop-types
      <div alt={props.test} className={styles.test}>Example 1st: {props.text}</div>
    </React.Fragment>
  )
}

function Component2(props) {
  return (
    <div>
      <button>{props.text2}</button>
    </div>
  )
}

export { ExampleComponent, Component2, Component4 }

export class Component3 extends React.Component {
  static propTypes = {
    text3: PropTypes.string
  }

  render() {
    const {
      text3
    } = this.props

    return (
      <div className={styles.test}>
        Component3: {text3}
         
      </div>
     
    )
  }
}
